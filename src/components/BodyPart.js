import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={
                bodyPart === item
                    ? {
                          borderTop: "4px solid #FF2625",
                          background: "#fff",
                          borderBottomLeftRadius: "20px",
                          width: "200px",
                          height: "200px",
                          cursor: "pointer",
                          gap: "30px",
                      }
                    : {
                          background: "#fff",
                          borderBottomLeftRadius: "20px",
                          width: "200px",
                          height: "200px",
                          cursor: "pointer",
                          gap: "30px",
                      }
            }
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}
        >
            <img
                src={Icon}
                alt="dumbbell"
                style={{
                    width: "40px",
                    height: "40px",
                }}
            />

            <Typography fontFamily="Patrick Hand SC" fontSize="24px">
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
