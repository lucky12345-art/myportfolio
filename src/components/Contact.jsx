import React from 'react';

const Contact = () => {
  const sectionStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #dbeafe, #fef3c7)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '24px',
  };

  const textStyle = {
    fontSize: '20px',
    color: '#374151',
    margin: '8px 0',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <p style={textStyle}>📧 Email: amara23bcy46@iiitkottayam.ac.in</p>
      <p style={textStyle}>📞 Phone: +91 9059309747</p>
    </section>
  );
};

export default Contact;
