import React from 'react';
import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: '60vh',
    marginBottom: theme.spacing(15),
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url('https://prime.edu.np/wp-content/uploads/2023/07/about-bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        zIndex: 2,
      },
  },
  textBox: {
    position: 'absolute',
    top: 'calc(60vh)', 
    left: 0,
    borderBottomLeftRadius:"100%",
    borderTopRightRadius:"100%",
    width: '100%',
    height: 'calc(20vh)', // Same as half the height of the cover image
    backgroundColor: theme.palette.secondary.dark,
    color:theme.palette.secondary.contrastText,
    opacity:0.8,
    textTransform:"uppercase",
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    transform: 'translateY(-50%)', // Move up half its height
    // transform: 'rotate(-3deg)',

  },
  sectionHeading: {
    fontWeight: `${theme.typography.fontWeightBold} !important`,
    fontSize: '2.5rem !important', 
    color: theme.palette.secondary.light, 
    textTransform:"uppercase",
    marginBottom: theme.spacing(2), 
    
  },
  cardHeading:{
    color: `${theme.palette.secondary.light} !important`,
    fontWeight:`${theme.typography.fontWeightBold} !important`,
    marginBottom:"2rem !important",
    
  },

  fixedImageBox: {
    width: '100%',
    maxWidth: 500,
    height: 600,
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: theme.shadows[3],
  },
  fixedImage: {
    width: '99%',
    height: '98%',
    objectFit: 'cover',
    borderRadius: '8px',
    backgroundPositionX:"center",
    backgroundPositionY:"center",
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
  animatedCard: {
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: theme.shadows[4],
    },
  },
}));

const HomeCollage1 = () => {
  const classes = useStyles();

  const images = {
    aboutImage: "https://images.pexels.com/photos/20265337/pexels-photo-20265337/free-photo-of-ponte-vecchio-bridge-in-florence-in-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    visionImage: "https://prime.edu.np/wp-content/uploads/2023/08/PC-building-scaled.jpg",
    principalImage: "https://prime.edu.np/wp-content/uploads/2023/08/N-P-Sharma-scaled.jpg"
  };

  const sections = [
    { title: 'About Texas', image: images.aboutImage, content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat eligendi, mollitia quod perspiciatis, sunt labore perferendis ab consectetur, eius ea deserunt. Dolorum quae minima maxime praesentium molestiae nam harum quo quas vero, eveniet, et assumenda consequatur maiores voluptas incidunt!', reverse: false },
    { title: 'Vision', image: images.visionImage, content: 'Our vision for the future.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum deserunt iure illum quam eligendi, sequi reprehenderit quisquam ex neque dolorem doloribus tempora consectetur facilis aperiam, tenetur soluta, nulla aliquam.', reverse: true },
  ];
  const missionValues = [
    { title: 'The Students', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea tempora ut veniam eius accusantium beatae ad illo praesentium laborum omnis libero, quaerat voluptates est aliquid odio dolorum, provident distinctio eveniet, non recusandae. Minima eos, iure iusto laboriosam placeat esse.' },
    { title: 'The Teachers', content: 'Our mission for the teachers.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea tempora ut veniam eius accusantium beatae ad illo praesentium laborum omnis libero, quaerat voluptates est aliquid odio dolorum, provident distinctio eveniet, non recusandae. Minima eos, iure iusto laboriosam placeat esse.' },
    { title: 'The Community', content: 'Our mission for the community.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea tempora ut veniam eius accusantium beatae ad illo praesentium laborum omnis libero, quaerat voluptates est aliquid odio dolorum, provident distinctio eveniet, non recusandae. Minima eos, iure iusto laboriosam placeat esse.' },
  ];

  const values = [
    { title: 'Empowerment', content: 'We empower our students.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea tempora ut veniam eius accusantium beatae ad illo praesentium laborum omnis libero, quaerat voluptates est aliquid odio dolorum, provident distinctio eveniet, non recusandae. Minima eos, iure iusto laboriosam placeat esse.' },
    { title: 'Equality and Diversity', content: 'We value equality and diversity.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea tempora ut veniam eius accusantium beatae ad illo praesentium laborum omnis libero, quaerat voluptates est aliquid odio dolorum, provident distinctio eveniet, non recusandae. Minima eos, iure iusto laboriosam placeat esse.' },
    { title: 'Engage, Collaborate, & Build Relationships', content: 'We engage, collaborate, and build relationships.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea tempora ut veniam eius accusantium beatae ad illo praesentium laborum omnis libero, quaerat voluptates est aliquid odio dolorum, provident distinctio eveniet, non recusandae. Minima eos, iure iusto laboriosam placeat esse.' },
  ];

  return (
    <div>
      <Box className={classes.coverContainer}>
      <Box className={classes.textBox}>
          <Typography variant="h2">
            Who We Are
          </Typography>
        </Box>
      </Box>
      <Container>
        {sections.map((section, index) => (
          <Grid container spacing={6}  alignItems="center" key={index} direction={section.reverse ? 'row-reverse' : 'row'}>
            <Grid item xs={12} md={6} padding={8}>
              <Typography className={classes.sectionHeading} variant="h4" gutterBottom>{section.title}</Typography>
              <Typography variant="body1">{section.content}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.fixedImageBox}>
                <img src={section.image} alt={section.title} className={classes.fixedImage} />
              </Box>
            </Grid>
          </Grid>
        ))}

        <Box mt={10}>
          <Typography className={classes.sectionHeading} marginBottom={'3rem'} variant="h4" gutterBottom>Missions</Typography>
          <Grid container spacing={4}>
            {missionValues.map((mission, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className={classes.animatedCard}>
                  <CardContent>
                    <Typography className={classes.cardHeading} variant="h5" component="h2">{mission.title}</Typography>
                    <Typography variant="body2" lineHeight={'1.4rem'}>{mission.content}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={10}>
          <Typography className={classes.sectionHeading} marginBottom={'3rem'}  variant="h4" gutterBottom>Values</Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className={classes.animatedCard}>
                  <CardContent>
                    <Typography className={classes.cardHeading} variant="h5" component="div">{value.title}</Typography>
                    <Typography variant="body2" lineHeight={'1.4rem'}>{value.content}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={5} mb={5}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className={classes.fixedImageBox}>
                <img src={images.principalImage} alt="Principal" className={classes.fixedImage} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" className={classes.sectionHeading} gutterBottom>Message from the Principal</Typography>
              <Typography variant="body1">"Message from the principal goes here.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea tempora ut veniam eius accusantium beatae ad illo praesentium laborum omnis libero, quaerat voluptates est aliquid odio dolorum, provident distinctio eveniet, non recusandae. Minima eos, iure iusto laboriosam placeat esse.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea tempora ut veniam eius accusantium beatae ad illo praesentium laborum omnis libero, quaerat voluptates est aliquid odio dolorum, provident distinctio eveniet, non recusandae. Minima eos, iure iusto laboriosam placeat esse."
</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HomeCollage1;
