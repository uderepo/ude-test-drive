import './token-scope.css';

/** TOKEN-OVERRIDDEN-BY-ANCESTOR: токен в правиле и у элемента, переопределённый ближе :root (класс, свой, inline, мод). */
export default function ScreenTokenScope() {
  return (
    <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>Token scope</h1>
      <p className="ts-rule">K1 rule token no override</p>
      <div className="ts-card">
        <p className="ts-rule">K2 rule token card override</p>
        <p style={{ color: 'var(--ref-color-blue-500)' }}>K3 inline token card override</p>
      </div>
      <p className="ts-own">K5 own rule override</p>
      <div style={{ ['--sys-primary' as string]: 'rgb(0, 0, 255)' }}>
        <p className="ts-rule">K6 rule token inline ancestor</p>
      </div>
      <p className="ts-surface">K4a surface at root</p>
      <div data-theme="dark">
        <p className="ts-surface">K4b surface in dark wrapper</p>
      </div>
      <p style={{ color: 'var(--sys-primary)' }}>K7 inline token no override</p>
    </main>
  );
}
