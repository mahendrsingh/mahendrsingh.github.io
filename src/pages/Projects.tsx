import { Container, Typography, Grid, Box, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectCard = styled(Box)(({ theme }) => ({
  background: 'rgba(17, 25, 40, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(52, 211, 153, 0.1)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(52, 211, 153, 0.3)',
    boxShadow: '0 8px 24px rgba(52, 211, 153, 0.15)',
  }
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(45deg, #34D399, #4ADE80)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: theme.spacing(2),
}));

const TechChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(52, 211, 153, 0.1)',
  color: '#34D399',
  margin: theme.spacing(0.5),
  '&:hover': {
    background: 'rgba(52, 211, 153, 0.2)',
  }
}));

const ActionButton = styled(Button)<{ component?: React.ElementType; href?: string; target?: string; rel?: string }>(({ theme }) => ({
  color: '#34D399',
  borderColor: 'rgba(52, 211, 153, 0.3)',
  marginRight: theme.spacing(1),
  '&:hover': {
    borderColor: '#34D399',
    background: 'rgba(52, 211, 153, 0.1)',
  }
}));

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project. Explain what it does and what technologies you used.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Project 2',
    description: 'Description of your second project. Highlight the key features and your role in development.',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      pt: 8,
      pb: 6
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: '#fff',
              textAlign: 'center',
              mb: 6,
              background: 'linear-gradient(45deg, #34D399, #4ADE80)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            My Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ProjectCard>
                  <ProjectTitle variant="h4">
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <TechChip
                        key={tech}
                        label={tech}
                        size="small"
                      />
                    ))}
                  </Box>
                  <Box>
                    <ActionButton
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </ActionButton>
                    <ActionButton
                      component="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LaunchIcon />}
                    >
                      Live Demo
                    </ActionButton>
                  </Box>
                </ProjectCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 