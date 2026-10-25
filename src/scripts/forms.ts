import { WEB3FORMS_KEY, TBC, site } from '../data/site';

const MESSAGES: Record<string, string> = {
  valueMissing: 'Ce champ est nécessaire pour vous répondre.',
  patternMismatch: 'Format attendu : 10 chiffres, par exemple 06 12 34 56 78.',
  postal: 'Code postal à 5 chiffres, par exemple 95410.',
  consent: 'Cochez la case pour que l’on puisse vous rappeler.',
};

function errorFor(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  const v = el.validity;
  if (v.valid) return '';
  if (el instanceof HTMLInputElement && el.type === 'checkbox') return MESSAGES.consent;
  if (v.valueMissing) return MESSAGES.valueMissing;
  if (v.patternMismatch) return el.name === 'code_postal' ? MESSAGES.postal : MESSAGES.patternMismatch;
  return 'Valeur à vérifier.';
}

function show(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  const box = document.getElementById(`${el.id}-err`);
  const msg = errorFor(el);
  if (box) box.textContent = msg;
  if (msg) el.setAttribute('aria-invalid', 'true');
  else el.removeAttribute('aria-invalid');
  return !msg;
}

export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-lead]').forEach((form) => {
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[data-check]'),
    );
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = button?.textContent ?? '';

    fields.forEach((f) => {
      f.addEventListener('blur', () => {
        if (f.value || f.getAttribute('aria-invalid')) show(f);
      });
    });
    form.addEventListener('change', () => {
      fields.filter((f) => f.getAttribute('aria-invalid')).forEach(show);
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const ok = fields.map(show).every(Boolean);
      if (!ok) {
        const first = fields.find((f) => f.getAttribute('aria-invalid'));
        first?.focus();
        if (status) {
          status.dataset.kind = 'error';
          status.textContent = 'Il manque une information : le champ concerné est signalé.';
        }
        return;
      }
      if (!status || !button) return;

      if (WEB3FORMS_KEY === TBC) {
        status.dataset.kind = 'error';
        status.textContent = `L’envoi en ligne n’est pas encore activé. Appelez le ${site.phone} (dimanche au vendredi, 9 h–18 h).`;
        return;
      }

      button.disabled = true;
      button.textContent = 'Envoi en cours…';
      status.dataset.kind = '';
      status.textContent = '';
      try {
        const data = Object.fromEntries(new FormData(form).entries());
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...data, access_key: WEB3FORMS_KEY }),
        });
        const json = await res.json();
        if (!res.ok || !json.success) throw new Error(json.message || 'Erreur');
        form.reset();
        status.dataset.kind = 'ok';
        status.textContent = form.dataset.success ?? 'Demande envoyée. On vous rappelle.';
      } catch {
        status.dataset.kind = 'error';
        status.textContent = `La demande n’est pas partie (problème de connexion ou du service d’envoi). Réessayez ou appelez le ${site.phone}.`;
      } finally {
        button.disabled = false;
        button.textContent = label;
      }
    });
  });
}
