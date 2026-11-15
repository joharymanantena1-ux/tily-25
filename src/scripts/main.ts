// Fihetsika rehetra amin'ny tranokala. Averina isaky ny mivadika pejy (astro:page-load).

const tsyMihetsika = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ——— Fisehoana malefaka ——— */
function fisehoana() {
  const singa = document.querySelectorAll<HTMLElement>('[data-miseho]');
  if (tsyMihetsika() || !('IntersectionObserver' in window)) {
    singa.forEach((s) => s.classList.add('hita'));
    return;
  }
  const mpijery = new IntersectionObserver(
    (fidirana) => {
      for (const f of fidirana) {
        if (f.isIntersecting) {
          f.target.classList.add('hita');
          mpijery.unobserve(f.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  singa.forEach((s) => mpijery.observe(s));
}

/* ——— Menio amin'ny finday ——— */
function menio() {
  const d = document.querySelector<HTMLDialogElement>('#menio-finday');
  if (!d) return;
  document.querySelector('[data-sokafy-menio]')?.addEventListener('click', () => d.showModal());
  d.querySelector('[data-hidio-menio]')?.addEventListener('click', () => d.close());
  d.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => d.close()));
}

/* ——— Fonon-drakitsary (takelaka fandraisana): indray mandeha isaky ny fitsidihana ——— */
// Ny script kely ao amin'ny <head> no mametraka ny kilasy « misy-fono » alohan'ny fandokoana voalohany.
let fonoAndrasana = document.documentElement.classList.contains('misy-fono');

function fono() {
  const f = document.querySelector<HTMLElement>('[data-fono]');
  if (!f) return;
  const html = document.documentElement;
  if (!fonoAndrasana || tsyMihetsika()) {
    html.classList.remove('misy-fono');
    f.remove();
    return;
  }
  fonoAndrasana = false;
  try {
    sessionStorage.setItem('fono-nisokatra', '1');
  } catch {
    /* tsy maninona */
  }
  const vita = () => {
    f.remove();
    html.classList.remove('misy-fono');
  };
  f.addEventListener('animationend', vita, { once: true });
  f.addEventListener('click', vita);
}

/* ——— Tahirin-tsary: sivana + fijerena feno efijery ——— */
function tahiry() {
  const faritra = document.querySelector<HTMLElement>('[data-tahiry]');
  const jery = document.querySelector<HTMLDialogElement>('#jery');
  if (!faritra || !jery) return;

  const singa = Array.from(faritra.querySelectorAll<HTMLElement>('[data-singa]'));
  const sivana = Array.from(document.querySelectorAll<HTMLSelectElement>('[data-sivana]'));
  const isa = document.querySelector<HTMLElement>('[data-isa]');
  const tsisy = document.querySelector<HTMLElement>('[data-tsisy]');
  const famerenana = document.querySelector<HTMLButtonElement>('[data-avereno]');

  const hita = () => singa.filter((s) => !s.hidden);

  const sivanina = () => {
    for (const s of singa) {
      s.hidden = sivana.some((v) => v.value !== '' && s.dataset[v.dataset.sivana as string] !== v.value);
    }
    const n = hita().length;
    if (isa) isa.textContent = n === 0 ? 'Tsy misy sary' : `Sary ${n}`;
    if (tsisy) tsisy.hidden = n !== 0;
  };
  sivana.forEach((v) => v.addEventListener('change', sivanina));
  famerenana?.addEventListener('click', () => {
    sivana.forEach((v) => (v.value = ''));
    sivanina();
  });
  sivanina();

  // Fijerena feno efijery
  const sary = jery.querySelector<HTMLImageElement>('[data-jery-sary]')!;
  const lohateny = jery.querySelector<HTMLElement>('[data-jery-lohateny]')!;
  const antsipiriany = jery.querySelector<HTMLElement>('[data-jery-antsipiriany]')!;
  const mpaka = jery.querySelector<HTMLElement>('[data-jery-mpaka]')!;
  const laharana = jery.querySelector<HTMLElement>('[data-jery-laharana]')!;
  let lisitra: HTMLElement[] = [];
  let i = 0;

  const aseho = (vaovao: number, lalana = 0) => {
    i = (vaovao + lisitra.length) % lisitra.length;
    const s = lisitra[i];
    const b = s.querySelector<HTMLElement>('[data-sokafy]')!;
    sary.classList.remove('avy-ankavanana', 'avy-ankavia');
    void sary.offsetWidth; // mamerina ny animation
    if (lalana > 0) sary.classList.add('avy-ankavanana');
    if (lalana < 0) sary.classList.add('avy-ankavia');
    sary.src = b.dataset.lehibe!;
    sary.alt = b.dataset.alt ?? '';
    lohateny.textContent = b.dataset.lohateny ?? '';
    antsipiriany.textContent = b.dataset.antsipiriany ?? '';
    mpaka.innerHTML = s.querySelector('.mpaka')?.innerHTML ?? '';
    laharana.textContent = `${i + 1} / ${lisitra.length}`;
  };

  singa.forEach((s) =>
    s.querySelector('[data-sokafy]')?.addEventListener('click', () => {
      lisitra = hita();
      aseho(lisitra.indexOf(s));
      jery.showModal();
    }),
  );

  jery.querySelector('[data-jery-aloha]')?.addEventListener('click', () => aseho(i - 1, -1));
  jery.querySelector('[data-jery-manaraka]')?.addEventListener('click', () => aseho(i + 1, 1));
  jery.querySelector('[data-jery-hidio]')?.addEventListener('click', () => jery.close());
  jery.addEventListener('click', (e) => {
    if (e.target === jery) jery.close();
  });
  jery.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') aseho(i - 1, -1);
    if (e.key === 'ArrowRight') aseho(i + 1, 1);
  });
  jery.addEventListener('close', () => {
    lisitra[i]?.querySelector<HTMLElement>('[data-sokafy]')?.focus();
  });

  // Fikasihana (swipe) amin'ny finday
  let x0: number | null = null;
  jery.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true });
  jery.addEventListener(
    'touchend',
    (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 48) aseho(i + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
      x0 = null;
    },
    { passive: true },
  );
}

/* ——— Taratasy fifandraisana: manokatra ny fandefasana mailaka ——— */
function taratasy() {
  const t = document.querySelector<HTMLFormElement>('[data-taratasy]');
  if (!t) return;
  const hafatra: Record<string, string> = {
    anarana: 'Soraty azafady ny anaranao.',
    mailaka: 'Tsy mety io adiresy mailaka io. Ohatra: anarana@ohatra.mg',
    hafatra: 'Soraty azafady ny hafatrao.',
  };
  const saha = Array.from(t.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'));
  saha.forEach((s) => {
    s.addEventListener('invalid', () => s.setCustomValidity(hafatra[s.name] ?? 'Hamarino azafady ity saha ity.'));
    s.addEventListener('input', () => s.setCustomValidity(''));
  });
  t.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(t);
    const lohateny = `Hafatra avy amin’ny tranokala — ${d.get('anarana')}`;
    const vatany = `${d.get('hafatra')}\n\n— ${d.get('anarana')}${d.get('mailaka') ? ` (${d.get('mailaka')})` : ''}`;
    window.location.href = `mailto:${t.dataset.mailaka}?subject=${encodeURIComponent(lohateny)}&body=${encodeURIComponent(vatany)}`;
    const valiny = t.querySelector<HTMLElement>('[data-valiny]');
    if (valiny) {
      valiny.hidden = false;
      valiny.focus();
    }
  });
}

// Esorin'ny fivadihan-pejy ny kilasy eo amin'ny <html>: averina eto.
document.addEventListener('astro:after-swap', () => {
  const html = document.documentElement;
  html.classList.add('js');
  if (fonoAndrasana) html.classList.add('misy-fono');
});

document.addEventListener('astro:page-load', () => {
  fisehoana();
  menio();
  fono();
  tahiry();
  taratasy();
});
