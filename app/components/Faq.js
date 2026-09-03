'use client';
import { useRef, useState } from 'react';

export default function Faq({ items }) {
  const [open, setOpen] = useState(null);
  const refs = useRef([]);

  return (
    <div className="faq-list">
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={i}>
            <h3 style={{ margin: 0 }}>
              <button
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                id={`faq-q-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >{q}</button>
            </h3>
            <div
              className="faq-a"
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              ref={(el) => (refs.current[i] = el)}
              style={{ maxHeight: isOpen && refs.current[i] ? `${refs.current[i].scrollHeight}px` : 0 }}
            >
              <div className="faq-a-inner">{a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
