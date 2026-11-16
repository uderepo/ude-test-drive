import { useState } from 'react';
export default function Component_6(
  {
    children
  }: {
    children?: React.ReactNode;
  }
) {
  const [variable, setVariable] = useState('');
  return (
    <div
      id="canvas"
      style={{ width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onClick={() => {
        setVariable('1');
      }}><button
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>Click me</button>{children}<p
        style={{
          margin: '1em 0'
        }}>{variable}</p></div>
  );
}
