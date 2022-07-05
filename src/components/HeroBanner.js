import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/assets/images/banner.png";

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" },
            }}
            position="relative"
            p="20px"
        >
            <Typography
                fontFamily="Patrick Hand SC"
                color="#FF2625"
                fontWeight="600"
                fontSize="26px"
            >
                Fitness Club
            </Typography>
            <Typography
                fontWeight="700"
                fontFamily="Patrick Hand SC"
                sx={{
                    fontSize: {
                        lg: "44px",
                        xs: "40px",
                    },
                }}
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography
                fontFamily="Patrick Hand SC"
                fontSize="22px"
                lineHeight="35px"
                mb={2}
            >
                Check out the most effective exercises
            </Typography>
            <Button
                variant="contained"
                color="error"
                href="#exercises"
                sx={{
                    fontFamily: "Patrick Hand SC",
                    backgroundColor: " #ff2625",
                    padding: "10px 20px",
                    fontWeight: "500",
                    fontSize: "20px",
                }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontFamily="Patrick Hand SC"
                fontWeight={600}
                color="#ff2625"
                sx={{
                    opacity: 0.1,
                    display: {
                        lg: "block",
                        xs: "none",
                    },
                }}
                fontSize="200px"
            >
                Exercises
            </Typography>
            <img
                src={HeroBannerImage}
                alt="banner"
                className="hero-banner-img"
            />
        </Box>
    );
};

export default HeroBanner;
