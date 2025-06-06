import React from 'react';

const Skills = () => {
  return (
    <section 
      id="skills" 
      style={{ 
        background: '#8A9BA8',
        minHeight: '100vh',
        padding: '4rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Main Container */}
      <div style={{ 
        display: 'flex',
        gap: '3rem',
        maxWidth: '1200px',
        width: '100%'
      }}>
        
        {/* Development Skills Card */}
        <div style={{ 
          background: '#f5f5f5',
          borderRadius: '25px',
          padding: '3rem 2.5rem',
          flex: 1,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          
          <h2 style={{ 
            textAlign: 'center',
            fontSize: '2.2rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '2.5rem',
            marginTop: '0'
          }}>
            Development
          </h2>

          {/* Skills List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* HTML */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#E34F26' }}>🌐</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>HTML</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Experienced</p>
              </div>
            </div>

            {/* CSS */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#1572B6' }}>🎨</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>CSS</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Experienced</p>
              </div>
            </div>

            {/* JavaScript */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#F7DF1E', background: '#333', borderRadius: '6px', padding: '4px 8px' }}>JS</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>JavaScript</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Experienced</p>
              </div>
            </div>

            {/* Angular JS */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#DD0031' }}>⚡</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>Express JS</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Intermediate</p>
              </div>
            </div>

             <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#DD0031' }}>⚡</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>MongoDB</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Intermediate</p>
              </div>
            </div>

            {/* React JS */}
             <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#DD0031' }}>⚡</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>React JS</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Intermediate</p>
              </div>
            </div>

            {/* Git */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#F05032' }}>📋</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>Git</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Intermediate</p>
              </div>
            </div>

            {/* UI/UX design */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#FF6B6B' }}>🎯</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>UI/UX design</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Basic</p>
              </div>
            </div>

          </div>
        </div>

        {/* Other Skills Card */}
        <div style={{ 
          background: '#f5f5f5',
          borderRadius: '25px',
          padding: '3rem 2.5rem',
          flex: 1,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          
          <h2 style={{ 
            textAlign: 'center',
            fontSize: '2.2rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '2.5rem',
            marginTop: '0'
          }}>
            Other Skills
          </h2>

          {/* Skills List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* DSA */}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#4CAF50' }}>🧩</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>DSA</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Experienced</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#4CAF50' }}>🧩</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>Machine Learning</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Intermediate</p>
              </div>
            </div>

            {/* Competitive Programming */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#9C27B0' }}>🏆</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>Competitive Programming</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Intermediate</p>
              </div>
            </div>

            {/* C Language */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#A8B9CC', background: '#333', borderRadius: '6px', padding: '4px 8px' }}>C</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>C Language</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Experienced</p>
              </div>
            </div>

            {/* C++ */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#00599C' }}>⚙️</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>C++</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Experienced</p>
              </div>
            </div>

            {/* Java */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#ED8B00' }}>☕</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>Java</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Experienced</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: '#ED8B00' }}>☕</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.4rem', color: '#333', fontWeight: 'bold' }}>Linux(shell scripting)</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', color: '#666' }}>Experienced</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;