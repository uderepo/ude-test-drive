import { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenAbout() {
  const theme = useContext(ThemeContext);
  
  return (
    <><div
              style={{
                width: 'max-content',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '64px',
                backgroundColor: theme?.sys?.surface ?? '#ffffff',
                color: theme?.sys?.onSurface ?? '#0f172a',
              }}
            >

              <p style={{ fontSize: '10px', lineHeight: '20px', width: 'max-content' }}>Sibling screen for multi-screen routing. Safe to edit and safe to delete.</p>
              <div
                style={{
                  display: 'block',
                  minHeight: '50px',
                  padding: '10px',
                  border: '1px dashed #ccc',
                  paddingTop: '5px'
                }}><p
                  style={{
                    margin: '1em 0'
                  }}>Designer</p></div><h1
            style={{
              fontWeight: 700,
              width: 'max-content'
            }}>About-test</h1><button
                style={{
                  padding: '12px 20px',
                  backgroundColor: theme?.sys?.primary ?? '#3b82f6',
                  color: theme?.sys?.onPrimary ?? '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Read more
              </button>
            </div><div
              style={{
                display: 'block',
                minHeight: '50px',
                padding: '10px',
                border: '1px dashed #ccc'
              }} /></>
  );
}
