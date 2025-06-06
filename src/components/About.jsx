import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      style={{ 
        background: 'linear-gradient(135deg, #D4A574, #C9965C)',
        minHeight: '100vh',
        padding: '6rem 2rem 4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ 
          margin: '0 0 0.5rem 0',
          fontSize: '1.1rem',
          color: '#666',
          fontWeight: '500'
        }}>
          Get to Know More
        </p>
        <h1 style={{ 
          margin: '0',
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: '#000'
        }}>
          About Me
        </h1>
      </div>

      {/* Main Content Container */}
      <div style={{ 
        display: 'flex',
        gap: '2rem',
        maxWidth: '1400px',
        width: '100%',
        alignItems: 'flex-start'
      }}>
        
        {/* Profile Image Card */}
        <div style={{ 
          background: '#f5f5f5',
          borderRadius: '20px',
          padding: '2rem',
          minHeight: '400px',
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <div style={{ 
            fontSize: '6rem',
            color: '#999'
          }}>
            👤
          </div>
        </div>

        {/* Right Side Content */}
        <div style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          
          {/* Stats Cards */}
          <div style={{ 
            display: 'flex',
            gap: '2rem'
          }}>
            
            {/* Experience Card */}
            <div style={{ 
              background: '#f5f5f5',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              flex: 1,
              minHeight: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                🏆
              </div>
              <h3 style={{ 
                margin: '0 0 0.5rem 0',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#000'
              }}>
                Experience
              </h3>
              <p style={{ 
                margin: '0',
                fontSize: '1.1rem',
                color: '#666',
                fontWeight: '600'
              }}>
                2+ years
              </p>
              <p style={{ 
                margin: '0.25rem 0 0 0',
                fontSize: '1rem',
                color: '#888'
              }}>
                Programming
              </p>
            </div>

            {/* Education Card */}
            <div style={{ 
              background: '#f5f5f5',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              flex: 1,
              minHeight: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                👥
              </div>
              <h3 style={{ 
                margin: '0 0 0.5rem 0',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#000'
              }}>
                Education
              </h3>
              <p style={{ 
                margin: '0',
                fontSize: '1.1rem',
                color: '#666',
                fontWeight: '600'
              }}>
                Btech-Bachelor's Degree
              </p>
              <p style={{ 
                margin: '0.25rem 0 0 0',
                fontSize: '1rem',
                color: '#888'
              }}>
                CSE with Cyber Security
              </p>
              <p style={{ 
                margin: '0.25rem 0 0 0',
                fontSize: '1rem',
                color: '#888'
              }}>
                IIIT KOTTAYAM
              </p>
            </div>
          </div>

          {/* Description Text */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '2rem',
            marginTop: '1rem'
          }}>
            <p style={{ 
              margin: '0',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#333',
              textAlign: 'justify'
            }}>
              Hi, I'm Amara Uday Prasanna, a Btech student in CSE with Specilisation in Cyber Security  at Indian Institute of Information Technology KOTTAYAM and a passionate Web developer. I enjoy creating web applications that are user-friendly, responsive, and secure. I have experience in both front-end and back-end development using technologies such as HTML, CSS, JavaScript, SQL, Java and more. I also love challenging problems and learning new skills through competitive programming . You can find some of my projects and achievements on this website, my LinkedIn account, as well as my resume and contact details. Feel free to reach out to me if you are interested in working with me u without hesitating u can contact me. Thank you for visiting my portfolio website. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;