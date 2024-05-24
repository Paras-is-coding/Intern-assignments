import React, { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/system";
import FacilityBox from "../../components/facility/FacilityBox";

const Navbar = styled("nav")({
  height: "4rem",
  width: "100%",
  marginTop: "2rem",
  backgroundColor: "#41448B",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

const Content = styled(Container)({
  marginTop: "2rem",
  marginBottom: "4rem",
});

const PlayButton = styled(Button)({
  marginTop: "2rem",
  backgroundColor: "#41448B",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#333678",
  },
});

const ExploreSection = styled(Box)({
  marginTop: "4rem",
  textAlign: "center",
});



export default function HomePage() {

  
  const [facilities, setFacilities] = useState([
    {
      number: 4,
      facility: "Cafes",
      description: "Really clean and fresh food cafes for our students and staff only.",
      images: ["https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8fDA%3D"]
    },
    {
      number: 1,
      facility: "Library",
      description: "A quiet and comfortable space filled with books and resources for our students and staff.",
      images: ["https://plus.unsplash.com/premium_photo-1683134602059-c8c84737f0c9?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1661964155525-fe70c0f7162b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D"]
    },
    {
      number: 4,
      facility: "Sports Center",
      description: "State-of-the-art sports facilities for our students and staff to stay active and healthy.",
      images: ["https://plus.unsplash.com/premium_photo-1661717977220-2d24b59ddae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzJTIwc2Nob29sfGVufDB8fDB8fHww", "https://plus.unsplash.com/premium_photo-1661395131106-df573f21f7cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwb3J0cyUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"]
    },
    {
      number: 4,
      facility: "Science Labs",
      description: "Equipped with the latest technology for hands-on scientific exploration and discovery.",
      images: ["https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZSUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVuY2UlMjBsYWJ8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1605781231474-f60dea478e8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaWVuY2UlMjBsYWJ8ZW58MHx8MHx8fDA%3D","https://plus.unsplash.com/premium_photo-1663040132327-4287d901db40?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8c2NpZW5jZSUyMGxhYnxlbnwwfDB8fHwxNzE2MzY0MTY3fDE&ixlib=rb-4.0.3"]
    }
  ]);
  
  return (
    <>
      <Navbar>
        <div>WHY US?</div>
        <div>PROGRAMMES</div>
        <div>NEWS & EVENTS</div>
        <div>ALUMNI</div>
        <div>TIME TABLE</div>
        <div>SCHOLARSHIPS</div>
      </Navbar>

      <Content maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          color="textSecondary"
          lineHeight="3.5rem"
          gutterBottom
        >
          State-of-the-art infrastructure and facility college with all the
          needed infrastructures
        </Typography>

        <Typography 
        gutterBottom
        color="textPrimary"
        >
          Islington College houses some of the most sophisticated and modern
          infrastructure in the entirety of Nepal with a facility that is ever
          improving along with international standards.
        </Typography>

        <Box display="flex" justifyContent="center">
          <PlayButton variant="contained" startIcon={<PlayArrowIcon />}>
            Play Video
          </PlayButton>
        </Box>
      </Content>

      <Content maxWidth="md">
        <ExploreSection>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            color="textSecondary"
            gutterBottom
          >
            Explore Around
          </Typography>
          <Typography
          marginBottom={"4rem"}
          color="textPrimary"
          glutterBottom
          >
            We provide top facilities for the students to excel in every way
            possible.
          </Typography>
        </ExploreSection>

        {facilities &&
        facilities.map((facility,ind)=>(
          <FacilityBox key={ind} direction={ind%2}  number={facility.number} facility={facility.facility} description={facility.description} images={facility.images}/>
        ))
        }
      </Content>
    </>
  );
}
