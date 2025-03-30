import { Container, Grid, Typography, Paper, Box, Chip, Avatar, Divider, useTheme } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { styled } from '@mui/material/styles';
import profileImage from '../assets/profile.jpg';
import type { GridProps } from '@mui/material';
import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import CircularProgress from '@mui/material/CircularProgress';

// Updated Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  transition: 'all 0.3s ease-in-out',
  background: 'rgba(17, 25, 40, 0.75)',
  backdropFilter: 'blur(16px) saturate(180%)',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  color: '#fff',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  transition: 'all 0.3s ease',
  background: 'rgba(52, 211, 153, 0.1)',
  color: '#34D399',
  border: '1px solid rgba(52, 211, 153, 0.2)',
  '&:hover': {
    transform: 'translateY(-2px)',
    background: 'rgba(52, 211, 153, 0.2)',
    border: '1px solid rgba(52, 211, 153, 0.3)',
    boxShadow: '0 4px 12px rgba(52, 211, 153, 0.15)',
  },
}));

const SectionTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1.5),
    color: '#34D399',
    fontSize: '1.75rem',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'rotate(10deg) scale(1.1)',
    },
  },
  '& .MuiTypography-root': {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 220,
  height: 220,
  border: '4px solid rgba(52, 211, 153, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  objectFit: 'cover',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    border: '4px solid rgba(52, 211, 153, 0.6)',
    boxShadow: '0 12px 40px rgba(52, 211, 153, 0.2)',
  },
}));

const StyledGrid = styled(Grid)<{ component?: React.ElementType }>(({ theme }) => ({
  // Add any additional styles if needed
}));

const ExperienceCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  background: 'rgba(52, 211, 153, 0.05)',
  border: '1px solid rgba(52, 211, 153, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    background: 'rgba(52, 211, 153, 0.08)',
    border: '1px solid rgba(52, 211, 153, 0.2)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
}));

// Add new styled component for education and certification cards
const EducationCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  background: 'rgba(52, 211, 153, 0.05)',
  border: '1px solid rgba(52, 211, 153, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    background: 'rgba(52, 211, 153, 0.08)',
    border: '1px solid rgba(52, 211, 153, 0.2)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
}));

// Update the interface for categorized skills
interface SkillCategory {
  category: string;
  icon: string;
  skills: Array<{
    name: string;
    level: string;
  }>;
}

const SkillCategoryCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  background: 'rgba(52, 211, 153, 0.05)',
  border: '1px solid rgba(52, 211, 153, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    background: 'rgba(52, 211, 153, 0.08)',
    border: '1px solid rgba(52, 211, 153, 0.2)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const SkillProgressBar = styled(Box)(({ theme }) => ({
  height: '6px',
  borderRadius: '3px',
  background: 'rgba(255, 255, 255, 0.1)',
  position: 'relative',
  overflow: 'hidden',
}));

const ExpandIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  color: '#34D399',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  opacity: 0.7,
  transform: 'translateY(0)',
  '.MuiSvgIcon-root': {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    opacity: 1,
    '.MuiSvgIcon-root': {
      transform: 'scale(1.1)',
    },
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(52, 211, 153, 0.1)',
    transform: 'translateX(5px)',
  },
  '& .MuiSvgIcon-root': {
    color: '#34D399',
    fontSize: '1.5rem',
  },
  '& .MuiTypography-root': {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.95rem',
  }
}));

const SocialIcon = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(52, 211, 153, 0.1)',
  color: '#34D399',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    transform: 'translateY(-3px)',
    background: 'rgba(52, 211, 153, 0.2)',
    color: '#4ADE80',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
  }
}));

// Add new styled component for the download button
const DownloadButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: '10px 20px',
  backgroundColor: 'rgba(52, 211, 153, 0.1)',
  color: '#34D399',
  borderRadius: '25px',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
  border: '1px solid rgba(52, 211, 153, 0.2)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  marginTop: theme.spacing(3),
  position: 'relative',
  '&:hover': {
    backgroundColor: 'rgba(52, 211, 153, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(52, 211, 153, 0.15)',
    color: '#4ADE80',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  },
  '&:hover .MuiSvgIcon-root': {
    transform: 'translateY(2px)',
  },
  '&.loading': {
    pointerEvents: 'none',
    opacity: 0.7,
    '& .MuiCircularProgress-root': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#34D399',
    },
    '& .button-content': {
      opacity: 0,
    }
  }
}));

const About = () => {
  const theme = useTheme();
  const personalInfo = {
    name: "MAHENDRA SINGH",
    title: "Sr. DevOps Engineer",
    bio: "Experienced DevOps Engineer with expertise in cloud infrastructure, CI/CD pipelines, and container orchestration. Proven track record in implementing automation solutions and optimizing system performance.",
    location: "Noida, Uttar Pradesh",
    email: "mahendrax64@gmail.com",
    phone: "+91 9045537080",
    social: {
      linkedin: "https://linkedin.com/in/your-profile",
      github: "https://github.com/your-profile",
      instagram: "https://instagram.com/your-profile",
      facebook: "https://facebook.com/your-profile",
      hackathon: "https://devpost.com/your-profile"
    }
  };

  const skills = [
    "Terraform", "Ansible", "Linux", "Kubernetes", "AWS", "Azure", "SQL Server",
    "ArgoCD", "Docker", "Jenkins", "Helm", "Prometheus", "Grafana",
    "ELK", "Elasticsearch", "Logstash", "Kibana", "Maven", "Hashicorp Vault",
    "MS SQL Server", "Git", "Bash Scripting", "Python", "Redis",
    "Kafka", "Groovy", "Alertmanager", "Nginx", "Apache"
  ];

  const experience = [
    {
      role: "Sr. DevOps Engineer",
      company: "Paytm",
      location: "Noida, UP",
      duration: "03/2022 - Present",
      achievements: [
        "Led and implemented cloud infrastructure automation using Terraform, resulting in 40% faster deployment times and improved infrastructure consistency across environments",
        "Architected and managed large-scale AWS infrastructure including EC2, IAM, VPC, S3, Lambda, Elasticache, SNS, CloudWatch, CodeDeploy, and EKS, supporting 100+ microservices",
        "Designed and implemented Azure cloud solutions encompassing Virtual Machines, Active Directory, Virtual Networks, and Blob Storage, enabling hybrid cloud capabilities",
        "Established Infrastructure as Code (IaC) practices using Terraform, reducing infrastructure deployment time by 60% and eliminating manual configuration errors",
        "Implemented comprehensive monitoring solutions using ELK Stack, Fluentd, Prometheus, and Grafana, achieving 99.99% system uptime",
        "Orchestrated Kubernetes clusters using HELM and ArgoCD, managing 200+ pods across multiple environments",
        "Optimized cloud infrastructure costs through resource optimization and automation, resulting in 35% reduction in monthly cloud expenses",
        "Developed and maintained CI/CD pipelines using Jenkins and ArgoCD, reducing deployment time from hours to minutes",
        "Mentored junior DevOps engineers and collaborated with cross-functional teams to improve development workflows"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Oodles Technologies",
      location: "Gurgaon, HR",
      duration: "06/2020 - 03/2022",
      achievements: [
        "Architected and implemented cloud infrastructure on AWS and Azure, supporting 50+ applications with 99.9% uptime",
        "Developed automated deployment pipelines using Jenkins, reducing deployment time by 70% and eliminating manual errors",
        "Managed and optimized SQL database VMs, improving query performance by 40% through proper indexing and configuration",
        "Implemented containerization strategies using Docker and Kubernetes, enabling seamless application scaling",
        "Established version control best practices and automated code review processes, improving code quality by 45%"
      ]
    }
  ];

  const internship = {
    role: "DevOps Intern",
    company: "LinuxWorld Informatics Pvt Ltd",
    location: "Jaipur, RJ",
    duration: "06/2018 - 06/2019",
    achievements: [
      "Developed and maintained AWS cloud infrastructure components, gaining hands-on experience with EC2, S3, and VPC services",
      "Implemented and managed Docker containers for development environments, improving team productivity by 30%",
      "Configured and optimized web servers (Nginx, Apache) for high-performance applications",
      "Automated routine system administration tasks using Shell scripts and Python, saving 10+ hours weekly",
      "Collaborated with senior DevOps engineers to implement monitoring solutions and security best practices"
    ]
  };

  const certifications = [
    {
      title: "RED HAT CERTIFIED SYSTEM ADMINISTRATOR",
      id: "180142077"
    },
    {
      title: "RED HAT CERTIFIED SPECIALIST IN ANSIBLE AUTOMATION",
      id: "180142077"
    }
  ];

  const education = [
    {
      degree: "Computer Science & Engineering",
      institution: "Rajasthan Technical University",
      location: "Jaipur, RJ",
      year: "2018",
      specialization: "B.Tech"
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      category: "Cloud & Infrastructure",
      icon: "☁️",
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Azure", level: "Intermediate" },
        { name: "Terraform", level: "Intermediate" },
        { name: "Kubernetes", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" }
      ]
    },
    {
      category: "CI/CD & Automation",
      icon: "⚙️",
      skills: [
        { name: "Jenkins", level: "Intermediate" },
        { name: "ArgoCD", level: "Intermediate" },
        { name: "Ansible", level: "Intermediate" },
        { name: "Helm", level: "Intermediate" }
      ]
    },
    {
      category: "Monitoring & Logging",
      icon: "📊",
      skills: [
        { name: "Prometheus", level: "Intermediate" },
        { name: "Grafana", level: "Intermediate" },
        { name: "ELK Stack", level: "Intermediate" },
        { name: "Alertmanager", level: "Intermediate" }
      ]
    },
    {
      category: "Development & Scripting",
      icon: "💻",
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "Bash Scripting", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },
        { name: "Groovy", level: "Intermediate" }
      ]
    },
    {
      category: "Databases & Caching",
      icon: "🗄️",
      skills: [
        { name: "SQL Server", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" },
        { name: "Elasticsearch", level: "Intermediate" }
      ]
    },
    {
      category: "Web & Messaging",
      icon: "🌐",
      skills: [
        { name: "Nginx", level: "Intermediate" },
        { name: "Apache", level: "Intermediate" },
        { name: "Kafka", level: "Intermediate" }
      ]
    }
  ];

  const [isDownloading, setIsDownloading] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>(() => {
    const initial: { [key: string]: boolean } = {};
    skillCategories.forEach(category => {
      initial[category.category] = false;
    });
    return initial;
  });

  const [expandedExperiences, setExpandedExperiences] = useState<{ [key: string]: boolean }>(() => {
    const initial: { [key: string]: boolean } = {};
    experience.forEach((exp, index) => {
      initial[`exp-${index}`] = false;
    });
    initial['internship'] = false;
    return initial;
  });

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleExperience = (id: string) => {
    setExpandedExperiences(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 8,
        pb: 6,
        background: 'linear-gradient(to bottom right, #111928, #1F2937)',
        position: 'relative',
        color: '#fff',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(52, 211, 153, 0.15), rgba(17, 25, 40, 0) 50%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%2334D399' fill-opacity='0.05'%3E%3Cpath d='M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm0 2c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2zm0 4c7.732 0 14 6.268 14 14s-6.268 14-14 14S6 27.732 6 20 12.268 6 20 6zm0 2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8z'/%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5,
        },
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 6,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
            <Box sx={{ flex: { xs: '1', md: '0 0 33.333%' } }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box 
                  display="flex" 
                  justifyContent="center" 
                  mb={3}
                  sx={{
                    '& .MuiAvatar-root': {
                      width: 220,
                      height: 220,
                    }
                  }}
                >
                  <StyledAvatar
                    src={profileImage}
                    alt={personalInfo.name}
                    imgProps={{
                      style: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                      }
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
            <Box sx={{ flex: { xs: '1', md: '0 0 66.666%' } }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="h3" 
                    gutterBottom 
                    fontWeight="bold" 
                    sx={{ 
                      color: '#fff',
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      textAlign: { xs: 'center', md: 'left' },
                      mb: 2,
                    }}
                  >
                    {personalInfo.name}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#34D399',
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      textAlign: { xs: 'center', md: 'left' },
                      mb: 3,
                    }}
                  >
                    {personalInfo.title}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    textAlign: { xs: 'center', md: 'left' }
                  }}>
                    {personalInfo.bio}
                  </Typography>
                </Box>

                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 3,
                  mb: 4
                }}>
                  <Box sx={{ 
                    background: 'rgba(17, 25, 40, 0.75)',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    borderRadius: '12px',
                    padding: 3,
                    border: '1px solid rgba(255, 255, 255, 0.125)',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                      border: '1px solid rgba(52, 211, 153, 0.2)',
                    }
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#34D399',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&::before': {
                          content: '"📍"',
                          fontSize: '1.2rem',
                        }
                      }}
                    >
                      Location
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {personalInfo.location}
                    </Typography>
                  </Box>

                  <Box sx={{ 
                    background: 'rgba(17, 25, 40, 0.75)',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    borderRadius: '12px',
                    padding: 3,
                    border: '1px solid rgba(255, 255, 255, 0.125)',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                      border: '1px solid rgba(52, 211, 153, 0.2)',
                    }
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#34D399',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&::before': {
                          content: '"📞"',
                          fontSize: '1.2rem',
                        }
                      }}
                    >
                      Contact
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        {personalInfo.email}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        {personalInfo.phone}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ 
                  background: 'rgba(17, 25, 40, 0.75)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  borderRadius: '12px',
                  padding: 3,
                  border: '1px solid rgba(255, 255, 255, 0.125)',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                    border: '1px solid rgba(52, 211, 153, 0.2)',
                  }
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#34D399',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      '&::before': {
                        content: '"🔗"',
                        fontSize: '1.2rem',
                      }
                    }}
                  >
                    Social Links
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2,
                    flexWrap: 'wrap'
                  }}>
                    <SocialIcon href="https://github.com/mahendrsingh" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/in/mahendrsingh/" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon />
                    </SocialIcon>
                    <SocialIcon href="https://www.instagram.com/mahendrsj" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon href="https://www.hackerearth.com/@official7.ms" target="_blank" rel="noopener noreferrer">
                      <EmojiEventsIcon />
                    </SocialIcon>
                  </Box>
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mt: 3
                }}>
                  <DownloadButton 
                    href="/Mahendra_Singh_DevOps.pdf" 
                    download="Mahendra_Singh_DevOps.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className={isDownloading ? 'loading' : ''}
                  >
                    <Box className="button-content" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <DownloadIcon />
                      Download CV
                    </Box>
                    {isDownloading && <CircularProgress size={20} />}
                  </DownloadButton>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* Skills Section with updated styling */}
          <StyledPaper elevation={3}>
            <SectionTitle>
              <CodeIcon />
              <Typography variant="h5" fontWeight="500">Technical Skills</Typography>
            </SectionTitle>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
              {skillCategories.map((category, index) => (
                <SkillCategoryCard 
                  key={index}
                  sx={{ 
                    position: 'relative',
                    maxHeight: expandedCategories[category.category] ? '1000px' : '60px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    opacity: expandedCategories[category.category] ? 1 : 0.8,
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 1,
                    }
                  }}
                  onClick={() => toggleCategory(category.category)}
                >
                  <ExpandIcon>
                    {expandedCategories[category.category] ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ExpandIcon>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 2,
                      color: '#34D399',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&::before': {
                        content: `"${category.icon}"`,
                        fontSize: '1.4rem',
                      }
                    }}
                  >
                    {category.category}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 2,
                      opacity: expandedCategories[category.category] ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontSize: '0.9rem'
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: '#34D399',
                              fontSize: '0.9rem',
                              backgroundColor: 'rgba(52, 211, 153, 0.1)',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontWeight: 500
                            }}
                          >
                            {skill.level}
                          </Typography>
                        </Box>
                        <SkillProgressBar>
                          <Box
                            sx={{
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(90deg, #34D399, #4ADE80)',
                              borderRadius: '3px',
                              opacity: 0.5
                            }}
                          />
                        </SkillProgressBar>
                      </Box>
                    ))}
                  </Box>
                </SkillCategoryCard>
              ))}
            </Box>
          </StyledPaper>

          {/* Experience Section */}
          <StyledPaper elevation={3}>
            <SectionTitle>
              <WorkIcon />
              <Typography variant="h5" fontWeight="500">Professional Experience</Typography>
            </SectionTitle>
            {experience.map((exp, index) => (
              <ExperienceCard 
                key={index} 
                sx={{ 
                  mb: 4,
                  maxHeight: expandedExperiences[`exp-${index}`] ? '1000px' : '120px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  opacity: expandedExperiences[`exp-${index}`] ? 1 : 0.8,
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 1,
                  }
                }}
                onClick={() => toggleExperience(`exp-${index}`)}
              >
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  mb: 2
                }}>
                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#34D399',
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        mb: 1
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '1rem',
                        mb: 0.5
                      }}
                    >
                      {exp.company} | {exp.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: '#34D399',
                        backgroundColor: 'rgba(52, 211, 153, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        mt: { xs: 1, sm: 0 }
                      }}
                    >
                      {exp.duration}
                    </Typography>
                    <ExpandIcon>
                      {expandedExperiences[`exp-${index}`] ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </ExpandIcon>
                  </Box>
                </Box>
                <Box 
                  component="ul" 
                  sx={{ 
                    mt: 2,
                    pl: 2,
                    listStyle: 'none',
                    opacity: expandedExperiences[`exp-${index}`] ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                    '& li': {
                      position: 'relative',
                      pl: 3,
                      mb: 2,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#34D399',
                        borderRadius: '50%',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '3px',
                        top: '8px',
                        width: '2px',
                        height: 'calc(100% + 16px)',
                        backgroundColor: 'rgba(52, 211, 153, 0.2)',
                      },
                      '&:last-child::after': {
                        display: 'none',
                      }
                    }
                  }}
                >
                  {exp.achievements.map((achievement, i) => (
                    <Typography 
                      component="li" 
                      variant="body2" 
                      key={i} 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        '&:hover': {
                          color: 'rgba(255, 255, 255, 0.95)',
                        }
                      }}
                    >
                      {achievement}
                    </Typography>
                  ))}
                </Box>
              </ExperienceCard>
            ))}

            {/* Internship with matching style */}
            <Box sx={{ mt: 4 }}>
              <SectionTitle>
                <WorkHistoryIcon />
                <Typography variant="h5" fontWeight="500">Internship</Typography>
              </SectionTitle>
              <ExperienceCard
                sx={{ 
                  maxHeight: expandedExperiences['internship'] ? '1000px' : '120px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  opacity: expandedExperiences['internship'] ? 1 : 0.8,
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 1,
                  }
                }}
                onClick={() => toggleExperience('internship')}
              >
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  mb: 2
                }}>
                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#34D399',
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        mb: 1
                      }}
                    >
                      {internship.role}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '1rem',
                        mb: 0.5
                      }}
                    >
                      {internship.company} | {internship.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: '#34D399',
                        backgroundColor: 'rgba(52, 211, 153, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        mt: { xs: 1, sm: 0 }
                      }}
                    >
                      {internship.duration}
                    </Typography>
                    <ExpandIcon>
                      {expandedExperiences['internship'] ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </ExpandIcon>
                  </Box>
                </Box>
                <Box 
                  component="ul" 
                  sx={{ 
                    mt: 2,
                    pl: 2,
                    listStyle: 'none',
                    opacity: expandedExperiences['internship'] ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                    '& li': {
                      position: 'relative',
                      pl: 3,
                      mb: 2,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#34D399',
                        borderRadius: '50%',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '3px',
                        top: '8px',
                        width: '2px',
                        height: 'calc(100% + 16px)',
                        backgroundColor: 'rgba(52, 211, 153, 0.2)',
                      },
                      '&:last-child::after': {
                        display: 'none',
                      }
                    }
                  }}
                >
                  {internship.achievements.map((achievement, i) => (
                    <Typography 
                      component="li" 
                      variant="body2" 
                      key={i} 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        '&:hover': {
                          color: 'rgba(255, 255, 255, 0.95)',
                        }
                      }}
                    >
                      {achievement}
                    </Typography>
                  ))}
                </Box>
              </ExperienceCard>
            </Box>
          </StyledPaper>

          {/* Certifications Section */}
          <StyledPaper elevation={3}>
            <SectionTitle>
              <CardMembershipIcon />
              <Typography variant="h5" fontWeight="500">Certifications</Typography>
            </SectionTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {certifications.map((cert, index) => (
                <EducationCard 
                  key={index} 
                  sx={{ 
                    flex: '1 1 300px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: 'linear-gradient(to bottom, #34D399, rgba(52, 211, 153, 0.2))',
                      borderTopLeftRadius: '12px',
                      borderBottomLeftRadius: '12px',
                    }
                  }}
                >
                  <Box sx={{ pl: 2 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#34D399',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&::before': {
                          content: '"🏆"',
                          fontSize: '1.2rem',
                        }
                      }}
                    >
                      {cert.title}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&::before': {
                          content: '"🔑"',
                          fontSize: '0.9rem',
                        }
                      }}
                    >
                      Certification ID: {cert.id}
                    </Typography>
                  </Box>
                </EducationCard>
              ))}
            </Box>
          </StyledPaper>

          {/* Education Section */}
          <StyledPaper elevation={3}>
            <SectionTitle>
              <SchoolIcon />
              <Typography variant="h5" fontWeight="500">Education</Typography>
            </SectionTitle>
            {education.map((edu, index) => (
              <EducationCard 
                key={index} 
                sx={{ 
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #34D399, rgba(52, 211, 153, 0.2))',
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '12px',
                  }
                }}
              >
                <Box sx={{ pl: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#34D399',
                      fontWeight: 600,
                      fontSize: '1.25rem',
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      '&::before': {
                        content: '"🎓"',
                        fontSize: '1.4rem',
                      }
                    }}
                  >
                    {edu.specialization} in {edu.degree}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      '&::before': {
                        content: '"🏛️"',
                        fontSize: '1.1rem',
                      }
                    }}
                  >
                    {edu.institution}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 3,
                    mt: 2 
                  }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&::before': {
                          content: '"📍"',
                          fontSize: '0.9rem',
                        }
                      }}
                    >
                      {edu.location}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: '#34D399',
                        backgroundColor: 'rgba(52, 211, 153, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&::before': {
                          content: '"🎯"',
                          fontSize: '0.9rem',
                        }
                      }}
                    >
                      Graduated: {edu.year}
                    </Typography>
                  </Box>
                </Box>
              </EducationCard>
            ))}
          </StyledPaper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 