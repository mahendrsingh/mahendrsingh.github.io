import { Container, Grid, Typography, Box, Card, CardContent, CardMedia, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArticleIcon from '@mui/icons-material/Article';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CategoryIcon from '@mui/icons-material/Category';

// Styled components
const StyledPaper = styled(Box)(({ theme }) => ({
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

const BlogCard = styled(Card)(({ theme }) => ({
  background: 'rgba(52, 211, 153, 0.05)',
  border: '1px solid rgba(52, 211, 153, 0.1)',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-4px)',
    background: 'rgba(52, 211, 153, 0.08)',
    border: '1px solid rgba(52, 211, 153, 0.2)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const BlogImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
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

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: 'rgba(52, 211, 153, 0.1)',
  color: '#34D399',
  border: '1px solid rgba(52, 211, 153, 0.2)',
  '&:hover': {
    background: 'rgba(52, 211, 153, 0.2)',
    border: '1px solid rgba(52, 211, 153, 0.3)',
  },
}));

const Blogs = () => {
  // Sample blog data - replace with your actual blog posts
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Kubernetes",
      excerpt: "Learn the fundamentals of Kubernetes and how to deploy your first containerized application.",
      image: "https://source.unsplash.com/random/800x600?kubernetes",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "DevOps",
      technologies: ["Kubernetes", "Docker", "Containerization"],
      link: "https://medium.com/your-blog/kubernetes-basics"
    },
    {
      id: 2,
      title: "Infrastructure as Code with Terraform",
      excerpt: "A comprehensive guide to managing cloud infrastructure using Terraform and best practices.",
      image: "https://source.unsplash.com/random/800x600?terraform",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Cloud",
      technologies: ["Terraform", "AWS", "Infrastructure"],
      link: "https://medium.com/your-blog/terraform-guide"
    },
    {
      id: 3,
      title: "CI/CD Pipeline Automation",
      excerpt: "Building robust CI/CD pipelines using Jenkins and ArgoCD for modern applications.",
      image: "https://source.unsplash.com/random/800x600?cicd",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "DevOps",
      technologies: ["Jenkins", "ArgoCD", "CI/CD"],
      link: "https://medium.com/your-blog/cicd-automation"
    },
    // Add more blog posts here
  ];

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
          <StyledPaper>
            <SectionTitle>
              <ArticleIcon />
              <Typography variant="h5" fontWeight="500">Tech Blogs</Typography>
            </SectionTitle>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.8)' }}>
              Insights, tutorials, and best practices in DevOps, Cloud Computing, and Infrastructure Automation.
            </Typography>
            <Grid container spacing={3}>
              {blogs.map((blog) => (
                <Grid item xs={12} md={6} key={blog.id}>
                  <BlogCard>
                    <BlogImage
                      image={blog.image}
                      title={blog.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#34D399',
                            fontWeight: 600,
                            mb: 1
                          }}
                        >
                          {blog.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            mb: 2
                          }}
                        >
                          {blog.excerpt}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AccessTimeIcon sx={{ fontSize: '1rem', color: '#34D399' }} />
                            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                              {blog.readTime}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CategoryIcon sx={{ fontSize: '1rem', color: '#34D399' }} />
                            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                              {blog.category}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {blog.technologies.map((tech) => (
                            <TechChip 
                              key={tech} 
                              label={tech} 
                              size="small"
                            />
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography 
                            variant="caption" 
                            sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                          >
                            {blog.date}
                          </Typography>
                          <Typography
                            component="a"
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: '#34D399',
                              textDecoration: 'none',
                              fontWeight: 500,
                              '&:hover': {
                                textDecoration: 'underline',
                              }
                            }}
                          >
                            Read More →
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </BlogCard>
                </Grid>
              ))}
            </Grid>
          </StyledPaper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Blogs; 