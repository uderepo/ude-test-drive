import { useState } from 'react';

/** Скрытые в коде элементы — разными формами записи; последний блок виден для сравнения. */
export default function ScreenHidden() {
  const [showPromo] = useState(false);
  const compact = true;

  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>Hidden elements</h1>

      <div className="hidden" style={{ padding: '16px' }}>Hidden by class</div>

      <div hidden>Hidden by attribute</div>

      <div style={{ display: 'none', padding: '16px' }}>Hidden by style display none</div>

      <div style={{ display: compact ? 'none' : 'block', padding: '16px' }}>Hidden by condition in style</div>

      {showPromo && <div style={{ padding: '16px' }}>Hidden by condition in markup</div>}

      <div className="hide-from-md" style={{ padding: '16px', backgroundColor: '#fef3c7' }}>
        Hidden from 768px wide
      </div>

      <div style={{ padding: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>Visible control</div>
    </main>
  );
}
