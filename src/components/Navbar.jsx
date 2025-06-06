import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav style={{ 
      padding: '1rem 2rem', 
      background: '#333', 
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      boxSizing: 'border-box',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      
      {/* Logo/Brand on the left */}
      <div 
        style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'color 0.3s'
        }}
        onClick={() => scrollToSection('hero')}
        onMouseEnter={(e) => e.target.style.color = '#ccc'}
        onMouseLeave={(e) => e.target.style.color = '#fff'}
      >
        Personal Portfolio Website
      </div>
      
      {/* Navigation links on the right */}
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
        <li>
          <button 
            onClick={() => scrollToSection('hero')}
            style={navButtonStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('about')}
            style={navButtonStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('skills')}
            style={navButtonStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Experience
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('projects')}
            style={navButtonStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Projects
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')}
            style={navButtonStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

// 🔧 Reusable styles
const navButtonStyle = {
  background: 'none', 
  border: 'none', 
  color: '#fff', 
  cursor: 'pointer',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  fontFamily: 'inherit'
};

const hoverOn = (e) => e.target.style.backgroundColor = '#555';
const hoverOff = (e) => e.target.style.backgroundColor = 'transparent';

export default Navbar;
