import { hours } from '../data/site';

const DAYS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

function parisNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const h = Number(get('hour')) % 24;
  const m = Number(get('minute'));
  return { day: wd, minutes: h * 60 + m };
}

const toMin = (s: string) => {
  const [h, m] = s.split(':').map(Number);
  return h * 60 + m;
};
const fmt = (s: string) => {
  const [h, m] = s.split(':').map(Number);
  return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`;
};

export function computeStatus() {
  const { day, minutes } = parisNow();
  const today = hours.find((h) => h.day === day);
  if (today?.open && today.close) {
    const o = toMin(today.open);
    const c = toMin(today.close);
    if (minutes >= o && minutes < c) {
      return { open: true, text: `Ouvert maintenant, jusqu’à ${fmt(today.close)}` };
    }
    if (minutes < o) {
      return { open: false, text: `Fermé, ouvre aujourd’hui à ${fmt(today.open)}` };
    }
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const next = hours.find((h) => h.day === d);
    if (next?.open) {
      const when = i === 1 ? 'demain' : DAYS[d];
      return { open: false, text: `Fermé, ouvre ${when} à ${fmt(next.open)}` };
    }
  }
  return { open: false, text: 'Fermé' };
}

export function initStatus() {
  const nodes = document.querySelectorAll<HTMLElement>('[data-status]');
  if (!nodes.length) return;
  const update = () => {
    const s = computeStatus();
    nodes.forEach((n) => {
      n.dataset.state = s.open ? 'open' : 'closed';
      const label = n.querySelector('[data-status-text]');
      if (label) label.textContent = s.text;
    });
  };
  update();
  setInterval(update, 60_000);
}
