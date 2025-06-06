import React from 'react';
import cabincheckIcon from '../assets/cabincheck.png';
import ecommerceIcon from '../assets/ecommerce.png';
import taskschedulerIcon from '../assets/taskscheduler.png';
const projects = [
  {
  title: "CabinCheck",
  image: cabincheckIcon,
  description: `CabinCheck is a smart campus platform that tracks teacher presence in their cabins in real-time. 
It provides a mobile app for teachers and a web interface for students with separate logins. 
Students can check availability, request meetings, and track responses from faculty. 
Teachers can upload assignments, manage meeting requests, and update their status easily. 
The system improves campus communication, reduces time wastage, and streamlines academic coordination.`,
  techStack: ["React", "Firebase", "Html", "Tailwind CSS", "Node.js", "Express","MongoDB","javascript", "CSS", "Bootstrap","Flutter (Dart)"],
  about: "This is a platform used for communicating with teachers and students in a campus environment. It allows students to check teacher availability, request meetings, and view assignments.",
  github: "https://github.com/lucky12345-art/CabinCheck"
}
,
  {
    title: "ecommerce website",
    image: ecommerceIcon,
    description: "An eCommerce website is an online platform that allows users to browse, select, and purchase products or services over the internet. It typically features product listings, shopping carts, secure payment gateways, and user authentication. Customers can track orders and manage their profiles, while admins manage inventory, orders, and analytics. The goal is to offer a seamless and secure shopping experience. ",
    techStack: ["React", "Express.js", "Node.js", "MongoDB", "Javascript", "CSS", "Bootstrap","html","Tailwind CSS","Firebase"],  
    about: "This project replicates core Amazon features including user login, product browsing, cart management, and secure payments.",
    github: "https://github.com/lucky12345-art/ecommerce_1"
  },
  {
    title: "Task Scheduler",
    image: taskschedulerIcon,
    description: "A Task Scheduler is a tool, system service, or application used to automate the execution of tasks (programs, scripts, or commands) at predefined times or intervals. It is a crucial component in operating systems, backend systems, and web applications for automating repetitive or scheduled operations.",
    techStack: ["Python", "MySql", "CSS", "Bootstrap", "Html", ],
    about: "Task Scheduler is a web application that allows users to create, manage, and schedule tasks. It provides a user-friendly interface for adding tasks, setting deadlines, and receiving reminders.",
    github: "https://github.com/lucky12345-art/task-scheduler"
  }
];

// Styles
const appStyle = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  scrollBehavior: 'smooth', // smooth scrolling for anchor links
  backgroundColor: '#f9fafb',
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
};

const navbarStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 32px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  fontWeight: 600
};

const logoStyle = {
  fontSize: '24px',
  color: '#111827',
  textDecoration: 'none',
  userSelect: 'none'
};

const navItemsStyle = {
  display: 'flex',
  gap: '24px'
};

const navLinkStyle = {
  color: '#6b7280',
  textDecoration: 'none',
  fontSize: '16px',
  position: 'relative',
  padding: '4px',
  cursor: 'pointer',
  transition: 'color 0.3s ease'
};

const navLinkHoverStyle = {
  color: '#111827'
};

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });
  render() {
    const { href, children } = this.props;
    const { hovered } = this.state;
    const style = hovered
      ? { ...navLinkStyle, ...navLinkHoverStyle }
      : navLinkStyle;
    return (
      <a
        href={href}
        style={style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
      </a>
    );
  }
}

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  handleMouseEnter = () => this.setState({ isHovered: true });
  handleMouseLeave = () => this.setState({ isHovered: false });

  render() {
    const { project } = this.props;
    const { isHovered } = this.state;
    const cardStyle = {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.3s ease',
      cursor: 'default',
      maxWidth: '600px',
      margin: '0 auto',
      boxSizing: 'border-box',
      transform: isHovered ? 'scale(1.02)' : 'none'
    };

    const imageStyle = {
      width: '96px',
      height: '96px',
      objectFit: 'contain',
      marginBottom: '20px'
    };

    const titleStyle = {
      fontSize: '28px',
      fontWeight: 700,
      color: '#111827',
      marginBottom: '12px',
      textAlign: 'center'
    };

    const descriptionStyle = {
      fontSize: '16px',
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: '20px',
      maxWidth: '480px'
    };

    const aboutStyle = {
      fontSize: '16px',
      color: '#4b5563',
      textAlign: 'center',
      marginBottom: '24px',
      padding: '0 10px'
    };

    const techStackWrapperStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      justifyContent: 'center',
      marginBottom: '24px'
    };

    const techChipStyle = {
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      padding: '6px 14px',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: 600,
      userSelect: 'none'
    };

    const linkStyle = {
      backgroundColor: '#1e40af',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: 700,
      fontSize: '16px',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
      display: 'inline-block',
      textAlign: 'center'
    };

    const linkHoverStyle = {
      backgroundColor: '#3730a3'
    };

    const onLinkMouseEnter = (e) =>
      (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor);
    const onLinkMouseLeave = (e) =>
      (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor);

    return (
      <div
        style={cardStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        role="region"
        aria-labelledby={`project-title-${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} icon`}
          style={imageStyle}
        />
        <h3 id={`project-title-${project.title}`} style={titleStyle}>
          {project.title}
        </h3>
        <p style={descriptionStyle}>{project.description}</p>
        <div
          style={techStackWrapperStyle}
          aria-label={`Tech stack for ${project.title}`}
        >
          {project.techStack.map((tech, i) => (
            <span key={i} style={techChipStyle}>
              {tech}
            </span>
          ))}
        </div>
        <p style={aboutStyle}>{project.about}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={onLinkMouseEnter}
          onMouseLeave={onLinkMouseLeave}
        >
          Source Code
        </a>
      </div>
    );
  }
}

const Projects = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '64px 20px',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    boxSizing: 'border-box'
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: 700,
    color: '#111827',
    textAlign: 'center',
    marginBottom: '48px'
  };

  const projectsWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  };

  return (
    <main id="projects" style={containerStyle} tabIndex={-1}>
      <h2 style={headingStyle}>My Projects</h2>
      <section style={projectsWrapperStyle} aria-label="Projects List">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
};


export default Projects;

