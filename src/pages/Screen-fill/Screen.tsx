/** Заливка: только при наведении, основная + наведение, инлайн, без заливки, выключенная кнопка. */
export default function ScreenFill() {
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>Fill</h1>
      <div className="fill-hover-only" style={{ padding: '16px' }}>Fill only on hover</div>
      <div className="fill-card" style={{ padding: '16px' }}>Card: white, pink on hover</div>
      <div style={{ padding: '16px', backgroundColor: '#111' }}>Inline fill</div>
      <div style={{ padding: '16px' }}>No fill</div>
      <button className="fill-button" disabled style={{ padding: '8px 16px' }}>
        Disabled button
      </button>
    </main>
  );
}
