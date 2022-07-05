import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "../components/HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({
    targetMuscleExercises,
    equipmentExercises,
    target,
    equipment,
}) => {
    return (
        <Box
            sx={{
                mt: {
                    lg: "50px",
                    xs: "0",
                },
            }}
            p="0 20px 20px 20px"
        >
            <Typography
                fontFamily="Patrick Hand SC"
                borderBottom="2px solid darkred "
                variant="h4"
                mb="33px"
            >
                Exercises that target the same{" "}
                <span
                    style={{
                        color: "darkred",
                        fontWeight: "bold",
                    }}
                >
                    {target}
                </span>{" "}
                muscle group
            </Typography>
            <Stack
                direction="row"
                sx={{
                    p: "2",
                    position: "relative",
                }}
                mt="20px"
            >
                {targetMuscleExercises.length ? (
                    <HorizontalScrollBar data={targetMuscleExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
            <Typography
                fontFamily="Patrick Hand SC"
                borderBottom="2px solid darkred "
                variant="h4"
                mb="33px"
                marginTop={10}
            >
                Exercises that use the same{" "}
                <span
                    style={{
                        color: "darkred",
                        fontWeight: "bold",
                    }}
                >
                    {equipment}
                </span>{" "}
                equipment
            </Typography>
            <Stack
                direction="row"
                sx={{
                    p: "2",
                    position: "relative",
                }}
            >
                {targetMuscleExercises.length ? (
                    <HorizontalScrollBar data={targetMuscleExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;
