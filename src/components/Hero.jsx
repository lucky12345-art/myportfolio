import React from 'react';
import profilePic from '../assets/profile.jpg';
// Import the CV file properly
import cvFile from '../assets/Amara_Uday_Prasanna.pdf';

const Hero = () => {
  // Function to handle CV download - FIXED
  const handleDownloadCV = () => {
    try {
      // Option 1: Using imported file (recommended for src/assets)
      const link = document.createElement('a');
      link.href = cvFile;
      link.download = 'Amara_Uday_Prasanna.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Option 2: If you move the PDF to public folder, use this instead:
      // const cvUrl = '/Amara_Uday_Prasanna.pdf';
      // const link = document.createElement('a');
      // link.href = cvUrl;
      // link.download = 'Amara_Uday_Prasanna.pdf';
      // link.target = '_blank';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab if download fails
      window.open(cvFile, '_blank');
    }
  };

  // Function to handle contact form navigation
  const handleContactForm = () => {
    // Scroll to contact section or open contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative' // Added for scroll indicator positioning
      }}
    >
      {/* Profile Image */}
      <div style={{ marginBottom: '2rem' }}>
        <img
          src={profilePic}
          alt="Amara Uday Prasanna Profile"
          style={{ 
            width: '200px', 
            height: '200px',
            borderRadius: '50%', 
            border: '4px solid white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Introduction Text - FIXED NAME CONSISTENCY */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '0.5rem',
          opacity: '0.9',
          fontWeight: '300'
        }}>
          Hello, I'm
        </p>
        <h1 style={{ 
          fontSize: '3.5rem', 
          margin: '0.5rem 0',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Amara Uday Prasanna
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          margin: '1rem 0',
          opacity: '0.9',
          fontWeight: '300'
        }}>
          Full Stack Developer, ML Enthusiast, and Open Source Contributor
        </p>
        <p style={{ 
          fontSize: '1.1rem', 
          maxWidth: '600px',
          margin: '0 auto',
          opacity: '0.8',
          lineHeight: '1.6'
        }}>
          Passionate about creating innovative Web solutions and bringing ideas to life through code. 
          Specialized in React, Node.js,Express.js, Machine Learning,JavaScript,MongoDb,Mysql and Modern web technologies.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '3rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button
          onClick={handleDownloadCV}
          style={{
            padding: '12px 30px',
            fontSize: '1rem',
            fontWeight: '600',
            border: '2px solid white',
            backgroundColor: 'transparent',
            color: 'white',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#667eea';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          Download CV
        </button>
        
        <button
          onClick={handleContactForm}
          style={{
            padding: '12px 30px',
            fontSize: '1rem',
            fontWeight: '600',
            border: 'none',
            backgroundColor: 'white',
            color: '#667eea',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Contact Me
        </button>
      </div>

      {/* Social Media Links */}
      <div style={{ 
        display: 'flex', 
        gap: '1.5rem',
        justifyContent: 'center'
      }}>
        <a
          href="https://www.linkedin.com/in/amara-uday-prasanna-00b691318/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#0077b5';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        <a
          href="https://github.com/lucky12345-art"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#333';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        
        {/* LeetCode Link - Replaced Instagram */}
        <a
          href="https://leetcode.com/u/uday_king-123/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#FFA116';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.53 8.28.96l2.28-1.299c.262-.15.45-.389.562-.693a1.417 1.417 0 0 0-.562-1.764c-.693-.319-1.37.035-1.794.407L9.35 8.467c.665-.45 1.7-.38 2.28.225.58.604.58 1.658 0 2.262L9.35 13.217c-.262.262-.262.683 0 .945.262.262.682.262.944 0l2.28-2.263c1.46-1.46 1.46-3.825 0-5.285-1.46-1.46-3.825-1.46-5.285 0L4.008 9.897c-.262.262-.262.683 0 .945.262.262.682.262.944 0L7.232 8.56c.58-.58 1.658-.58 2.238 0 .58.58.58 1.658 0 2.238l-2.28 2.28c-.262.262-.262.683 0 .945.262.262.682.262.944 0l2.28-2.28c1.46-1.46 1.46-3.825 0-5.285-1.46-1.46-3.825-1.46-5.285 0L2.849 9.738a1.417 1.417 0 0 0-.562 1.764c.112.304.3.543.562.693l2.28 1.299c2.762 1.57 6.032 1.205 8.28-.96l.039-.038 4.277-4.193a5.938 5.938 0 0 0 1.271-1.818 5.83 5.83 0 0 0 .349-1.017 5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L14.444.438A1.374 1.374 0 0 0 13.483 0z"/>
          </svg>
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div style={{ 
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="white">
  <path d="M204.27 116.91L116.9 29.54a8 8 0 0 0-11.31 11.32l87.37 87.36a8 8 0 0 1 0 11.31l-87.37 87.36a8 8 0 1 0 11.31 11.31l87.37-87.36a24 24 0 0 0 0-33.63z"/>
  <path d="M148.69 116.91L72.57 40.79a8 8 0 0 0-11.32 11.32l76.12 76.11a8 8 0 0 1 0 11.31l-76.12 76.12a8 8 0 0 0 11.32 11.31l76.12-76.12a24 24 0 0 0 0-33.63z"/>
</svg>

      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;