import { Container, Grid, Typography, Box, TextField, Button, Paper, IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(17, 25, 40, 0.75)',
  backdropFilter: 'blur(16px) saturate(180%)',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  color: '#fff',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
  },
}));

const ContactCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: 'rgba(52, 211, 153, 0.05)',
  border: '1px solid rgba(52, 211, 153, 0.1)',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(52, 211, 153, 0.08)',
    border: '1px solid rgba(52, 211, 153, 0.2)',
    transform: 'translateX(5px)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(52, 211, 153, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#34D399',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-focused': {
      color: '#34D399',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #34D399, #4ADE80)',
  color: '#fff',
  padding: theme.spacing(1.5, 4),
  borderRadius: '8px',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #2FB67D, #3BCA6A)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 20px rgba(52, 211, 153, 0.3)',
  },
}));

const SocialIcon = styled(IconButton)<{ component?: React.ElementType; href?: string; target?: string; rel?: string }>(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#34D399',
    transform: 'translateY(-3px)',
  },
}));

const GridItem = styled(Grid)<{
  component?: React.ElementType;
  item?: boolean;
  xs?: number | 'auto';
  sm?: number | 'auto';
  md?: number | 'auto';
  lg?: number | 'auto';
  xl?: number | 'auto';
}>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const FormTextField = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .MuiTextField-root': {
    '& .MuiOutlinedInput-root': {
      color: '#fff',
      paddingLeft: '48px',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(52, 211, 153, 0.3)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#34D399',
      },
      '& input': {
        paddingLeft: '0',
      },
      '& textarea': {
        paddingLeft: '0',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
      '&.Mui-focused': {
        color: '#34D399',
      },
    },
  },
  '& .MuiSvgIcon-root': {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'rgba(52, 211, 153, 0.7)',
    transition: 'all 0.3s ease',
    zIndex: 1,
    pointerEvents: 'none',
  },
  '&:hover .MuiSvgIcon-root': {
    color: '#34D399',
    transform: 'translateY(-50%) scale(1.1)',
  },
  '& .Mui-focused + .MuiSvgIcon-root': {
    color: '#34D399',
  },
}));

const Contact = () => {
  const theme = useTheme();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
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
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6, position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4}>
            <GridItem item xs={12} md={6}>
              <StyledPaper>
                <Typography variant="h4" gutterBottom sx={{ color: '#34D399', fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.8)' }}>
                  Have a question or want to work together? Feel free to reach out through the contact form or connect with me on social media.
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <GridItem item xs={12}>
                      <FormTextField>
                        <StyledTextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          required
                          InputProps={{
                            startAdornment: <PersonIcon sx={{ color: 'rgba(52, 211, 153, 0.7)', mr: 1 }} />
                          }}
                        />
                      </FormTextField>
                    </GridItem>
                    <GridItem item xs={12}>
                      <FormTextField>
                        <StyledTextField
                          fullWidth
                          label="Email"
                          type="email"
                          variant="outlined"
                          required
                          InputProps={{
                            startAdornment: <EmailIcon sx={{ color: 'rgba(52, 211, 153, 0.7)', mr: 1 }} />
                          }}
                        />
                      </FormTextField>
                    </GridItem>
                    <GridItem item xs={12}>
                      <FormTextField>
                        <StyledTextField
                          fullWidth
                          label="Message"
                          multiline
                          rows={4}
                          variant="outlined"
                          required
                          InputProps={{
                            startAdornment: <MessageIcon sx={{ color: 'rgba(52, 211, 153, 0.7)', mr: 1, mt: 1 }} />
                          }}
                        />
                      </FormTextField>
                    </GridItem>
                    <GridItem item xs={12}>
                      <StyledButton
                        type="submit"
                        fullWidth
                        size="large"
                      >
                        Send Message
                      </StyledButton>
                    </GridItem>
                  </Grid>
                </form>
              </StyledPaper>
            </GridItem>
            <GridItem item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <StyledPaper>
                  <Typography variant="h5" gutterBottom sx={{ color: '#34D399', fontWeight: 600 }}>
                    Contact Information
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <ContactCard>
                      <EmailIcon sx={{ color: '#34D399', fontSize: '2rem' }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          Email
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          mahendrax64@gmail.com
                        </Typography>
                      </Box>
                    </ContactCard>
                    <ContactCard>
                      <PhoneIcon sx={{ color: '#34D399', fontSize: '2rem' }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          Phone
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          +91 9045537080
                        </Typography>
                      </Box>
                    </ContactCard>
                    <ContactCard>
                      <LocationOnIcon sx={{ color: '#34D399', fontSize: '2rem' }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          Location
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          Noida, UP, India
                        </Typography>
                      </Box>
                    </ContactCard>
                  </Box>
                </StyledPaper>

                <StyledPaper>
                  <Typography variant="h5" gutterBottom sx={{ color: '#34D399', fontWeight: 600 }}>
                    Connect With Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <SocialIcon 
                      component="a"
                      href="https://github.com/mahendrsingh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </SocialIcon>
                    <SocialIcon 
                      component="a"
                      href="https://www.linkedin.com/in/mahendrsingh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </SocialIcon>
                    <SocialIcon 
                      component="a"
                      href="https://www.instagram.com/mahendrsj" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon 
                      component="a"
                      href="https://www.hackerearth.com/@official7.ms" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <EmojiEventsIcon />
                    </SocialIcon>
                  </Box>
                </StyledPaper>
              </Box>
            </GridItem>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 