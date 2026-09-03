'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollFX() {
  // Re-run on every route change. Next.js keeps the root layout mounted across
  // client-side navigations, so a mount-only effect would leave every .reveal
  // element on the new page stuck at opacity 0.
  const pathname = usePathname();

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const supportsIO = typeof IntersectionObserver !== 'undefined';

    // scroll progress bar
    const prog = document.getElementById('progress');
    const onScroll = () => {
      if (!prog) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const observers = [];

    // reveal on scroll
    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
    if (reduce || !supportsIO) {
      els.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );
      els.forEach((el) => {
        // Anything already on screen at route change reveals immediately, so a
        // page you land on mid-scroll is never blank.
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
        else io.observe(el);
      });
      observers.push(io);
    }

    // counters
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
      if (!supportsIO) {
        counters.forEach((c) => (c.textContent = c.dataset.count));
      } else {
        const cio = new IntersectionObserver(
          (entries) =>
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              cio.unobserve(e.target);
              const target = +e.target.dataset.count;
              if (reduce) {
                e.target.textContent = target;
                return;
              }
              const dur = 1600;
              const t0 = performance.now();
              (function tick(t) {
                const p = Math.min((t - t0) / dur, 1);
                e.target.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
                if (p < 1) requestAnimationFrame(tick);
              })(t0);
            }),
          { threshold: 0.6 }
        );
        counters.forEach((c) => cio.observe(c));
        observers.push(cio);
      }
    }

    // parallax
    let raf;
    const px = [...document.querySelectorAll('[data-parallax]')].map((el) => ({ el, cur: 0 }));
    if (!reduce && px.length) {
      const loop = () => {
        px.forEach((p) => {
          const speed = parseFloat(p.el.dataset.parallax);
          const target = p.el.parentElement.getBoundingClientRect().top * -speed;
          p.cur += (target - p.cur) * 0.12;
          p.el.style.transform = `translate3d(0,${p.cur.toFixed(2)}px,0)`;
        });
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    // marquee duplication (idempotent)
    const mq = document.getElementById('marquee');
    if (mq && !mq.dataset.doubled) {
      mq.innerHTML += mq.innerHTML;
      mq.dataset.doubled = '1';
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observers.forEach((o) => o.disconnect());
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
