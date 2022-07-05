import React from "react";

import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/assets/icons/body-part.png";
import TargetImage from "../assets/assets/icons/target.png";
import EquipmentImage from "../assets/assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: {
                    lg: "row",
                },
                p: "20px",
                alignItems: "center",
            }}
        >
            <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                className="detail-image"
            />
            <Stack
                sx={{
                    gap: {
                        lg: "35px",
                        xs: "20px",
                    },
                }}
            >
                <Typography
                    fontFamily="Patrick Hand SC"
                    variant="h3"
                    color="darkred"
                >
                    {name}
                </Typography>
                <Typography fontFamily="Patrick Hand SC" fontSize="24px">
                    Exercises keep you strong. <b> {name} </b>is one of the best
                    exercises to target your <b>{target}</b> . It will help you
                    improve your mood and gain energy. You will need{" "}
                    <b> {equipment} </b> to do this exercise.
                </Typography>

                {extraDetail.map((item, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        gap="24px"
                        alignItems="center"
                    >
                        <Button
                            sx={{
                                background: "#fff2db",
                                borderRadius: "50%",
                                width: "80px",
                                height: "80px",
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={bodyPart}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                }}
                            />
                        </Button>
                        <Typography fontFamily="Patrick Hand SC" variant="h4">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;
