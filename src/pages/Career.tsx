import { Container, Typography } from '@mui/material';

const Career = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 8 }}>
        Career Path
      </Typography>
      <Typography paragraph>
        Share your professional journey, work experience, and achievements here.
      </Typography>
    </Container>
  );
};

export default Career; 