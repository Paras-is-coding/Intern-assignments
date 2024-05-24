import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FacilityContainer = styled(Box)(({theme,direction})=>({
  display: "flex",
  alignItems: "center",
  justifyContent:"space-between",
  marginBottom: "2rem",
  padding: "1rem",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column"
  }
}));

const FacilityDetails = styled(Box)(({theme})=>({
  flex: "1",
  maxWidth: "40%",
  padding: "3vw",
  [theme.breakpoints.down("sm")]:{
    maxWidth:"80%"
  }
}));

const FacilityImages = styled(Box)(({theme})=>({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "0.5rem",
  maxWidth: "35vw",
  maxHeight:"50vh",
  overflow:"hidden",
  [theme.breakpoints.down("sm")]:{
    maxWidth:"80%"
  }
}));

const FacilityBox = ({direction, number, facility, description, images }) => {
  console.log(direction)
  const theme = useTheme();
  return (
    <FacilityContainer flexDirection={direction?"row-reverse":"row"} >
      <FacilityDetails>
        <Typography variant="h5" align="center" color="textSecondary">
          {number}
        </Typography>
        <Typography align="center" color={"textSecondary"} variant="h4" fontWeight="bold">
          {facility}
        </Typography>
        <Typography align="center" color="textPrimary">{description}</Typography>
      </FacilityDetails>
      <FacilityImages>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${facility} ${index + 1}`}
                style={{ width: "100%", borderRadius: "8px",objectFit:"cover" }}
                
              />
            </div>
          ))}
        </Carousel>
      </FacilityImages>
    </FacilityContainer>
  );
};

export default FacilityBox;
