export default function Component_233({children}) {
  return (
    <div id="canvas" style={{ width: '500px', height: 'max-content', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>Click me
          </button>
      {children}
    </div>
  );
}
