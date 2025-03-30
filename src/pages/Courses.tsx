import { Container, Typography } from '@mui/material';

const Courses = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 8 }}>
        Courses
      </Typography>
      <Typography paragraph>
        Share your educational background, certifications, and courses you've completed.
      </Typography>
    </Container>
  );
};

export default Courses; 