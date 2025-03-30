import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import StorageIcon from '@mui/icons-material/Storage';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(17, 25, 40, 0.6)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(52, 211, 153, 0.1)',
  boxShadow: 'none',
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
  transition: 'transform 0.3s ease-in-out',
  '&.hidden': {
    transform: 'translateY(-100%)',
  }
}));

const NavButton = styled(Button)<{ component?: React.ElementType; to?: string }>(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  margin: theme.spacing(0, 1),
  transition: 'all 0.3s ease',
  fontWeight: 600,
  '&:hover': {
    color: '#34D399',
    transform: 'translateY(-2px)',
  },
  '&.active': {
    color: '#34D399',
    fontWeight: 700,
  }
}));

const Logo = styled(Box)<{ component?: React.ElementType; to?: string }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

const LogoIcon = styled(StorageIcon)(({ theme }) => ({
  color: '#34D399',
  fontSize: '2rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'rotate(10deg)',
  }
}));

const LogoText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #34D399, #4ADE80)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontSize: '1.5rem',
  letterSpacing: '0.5px',
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <StyledAppBar position="fixed" className={isHidden ? 'hidden' : ''}>
      <Toolbar>
        <Logo
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1 }}
        >
          <LogoIcon />
          <LogoText variant="h6">
            DevOps
          </LogoText>
        </Logo>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                position: 'fixed',
                top: 64,
                left: 0,
                right: 0,
                background: 'rgba(17, 25, 40, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(52, 211, 153, 0.1)',
                display: mobileMenuOpen ? 'block' : 'none',
                zIndex: theme.zIndex.drawer,
              }}
            >
              {navItems.map((item) => (
                <NavButton
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  fullWidth
                  className={location.pathname === item.path ? 'active' : ''}
                  sx={{ 
                    display: 'block',
                    py: 2,
                    px: 3,
                    textAlign: 'left',
                    '&:hover': {
                      background: 'rgba(52, 211, 153, 0.1)',
                    }
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavButton>
              ))}
            </Box>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <NavButton
                key={item.path}
                component={RouterLink}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </NavButton>
            ))}
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 