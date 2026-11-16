import Component_233 from '../Component-233/Component';
export default function Component_4() {
  return (
    <div id="canvas" style={{
      width: '500px',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '20px'
    }}><Component_233 /><div
              style={{
                display: 'block',
                minHeight: '50px',
                padding: '10px',
                border: '1px dashed #ccc'
              }}><p
                style={{
                  margin: '1em 0'
                }}>Element inside a component</p></div></div>
  );
}
