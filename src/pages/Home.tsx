import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import TerminalIcon from '@mui/icons-material/Terminal';
import BugReportIcon from '@mui/icons-material/BugReport';
import SecurityIcon from '@mui/icons-material/Security';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import FunctionsIcon from '@mui/icons-material/Functions';
import WebIcon from '@mui/icons-material/Web';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TimelineIcon from '@mui/icons-material/Timeline';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(52, 211, 153, 0.1) 0%, transparent 70%)',
    zIndex: -1,
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
    zIndex: -1,
  }
}));

const Title = styled(motion.div)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(45deg, #34D399, #4ADE80)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  }
}));

const Subtitle = styled(motion.div)(({ theme }) => ({
  fontSize: '1.5rem',
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  }
}));

const ActionButton = styled(Button)<{ component?: React.ElementType; to?: string }>(({ theme }) => ({
  background: 'linear-gradient(45deg, #34D399, #4ADE80)',
  color: '#fff',
  padding: '12px 32px',
  borderRadius: '25px',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(52, 211, 153, 0.3)',
    background: 'linear-gradient(45deg, #4ADE80, #34D399)',
  }
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
  justifyContent: 'center',
  flexWrap: 'wrap',
}));

const AnimatedIcon = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'rgba(52, 211, 153, 0.1)',
  border: '1px solid rgba(52, 211, 153, 0.2)',
  color: '#34D399',
  fontSize: '2rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(52, 211, 153, 0.15)',
    boxShadow: '0 4px 12px rgba(52, 211, 153, 0.2)',
  }
}));

const FloatingIcon = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  color: 'rgba(52, 211, 153, 0.1)',
  fontSize: '2rem',
  pointerEvents: 'none',
  zIndex: -1,
}));

const BackgroundIcons = () => {
  const icons = [
    { Icon: StorageIcon, x: 10, y: 20, delay: 0 }, // Kubernetes
    { Icon: CloudQueueIcon, x: 20, y: 80, delay: 0.2 }, // AWS
    { Icon: CloudIcon, x: 80, y: 30, delay: 0.4 }, // Azure
    { Icon: BuildIcon, x: 40, y: 60, delay: 0.6 }, // Jenkins
    { Icon: AccountTreeIcon, x: 70, y: 70, delay: 0.8 }, // Terraform
    { Icon: StorageIcon, x: 30, y: 40, delay: 1 }, // ArgoCD
    { Icon: CodeIcon, x: 60, y: 50, delay: 1.2 }, // Python
    { Icon: TerminalIcon, x: 50, y: 80, delay: 1.4 }, // Linux
    { Icon: TimelineIcon, x: 90, y: 40, delay: 1.6 }, // Grafana
    { Icon: StorageOutlinedIcon, x: 25, y: 75, delay: 1.8 }, // Kibana
    { Icon: StorageRoundedIcon, x: 75, y: 25, delay: 2 }, // Docker
    { Icon: IntegrationInstructionsIcon, x: 45, y: 55, delay: 2.2 }, // Ansible
    { Icon: GitHubIcon, x: 85, y: 65, delay: 2.4 }, // Git
    { Icon: DataObjectIcon, x: 15, y: 85, delay: 2.6 }, // SQL
    { Icon: CodeOffIcon, x: 65, y: 35, delay: 2.8 }, // Bash
  ];

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {icons.map(({ Icon, x, y, delay }, index) => (
        <FloatingIcon
          key={index}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon sx={{ fontSize: 40, color: 'rgba(76, 175, 80, 0.1)' }} />
        </FloatingIcon>
      ))}
    </Box>
  );
};

const Home = () => {
  return (
    <HeroSection>
      <BackgroundIcons />
      <Container maxWidth="md">
        <IconContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedIcon>
              <CodeIcon sx={{ fontSize: '2rem' }} />
            </AnimatedIcon>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedIcon>
              <StorageIcon sx={{ fontSize: '2rem' }} />
            </AnimatedIcon>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatedIcon>
              <CloudIcon sx={{ fontSize: '2rem' }} />
            </AnimatedIcon>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedIcon>
              <EmojiEventsIcon sx={{ fontSize: '2rem' }} />
            </AnimatedIcon>
          </motion.div>
        </IconContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hi, I'm Mahendra Singh 👋
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          DevOps Engineer & Full Stack Developer 🚀
        </Subtitle>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <ActionButton
              component={RouterLink}
              to="/about"
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </ActionButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ActionButton
              component={RouterLink}
              to="/contact"
              variant="outlined"
            >
              Contact Me
            </ActionButton>
          </motion.div>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Home; 