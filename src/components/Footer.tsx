import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledFooter = styled(Box)(({ theme }) => ({
  background: 'rgba(17, 25, 40, 0.8)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(52, 211, 153, 0.1)',
  padding: theme.spacing(2, 0),
  marginTop: 'auto',
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#34D399',
    transform: 'translateY(-3px)',
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 2 
        }}>
          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link 
              href="https://github.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <SocialIcon>
                <GitHubIcon />
              </SocialIcon>
            </Link>
            <Link 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <SocialIcon>
                <LinkedInIcon />
              </SocialIcon>
            </Link>
            <Link 
              href="https://instagram.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <SocialIcon>
                <InstagramIcon />
              </SocialIcon>
            </Link>
          </Box>

          {/* Copyright */}
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © {currentYear} Mahendra Singh. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer; 