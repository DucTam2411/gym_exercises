import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
    console.log("1");
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: "15px",
                        color: "#fff",
                        background: "#ffa9a9",
                        fontSize: "14px",
                        textTransform: "capital ize",
                        borderRadius: "15px",
                        fontFamily: "cursive",
                        mb: "10px",
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: "21px",
                        color: "#fff",
                        background: "#fcc757",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        borderRadius: "15px",
                        fontFamily: "cursive",
                        mb: "10px",
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                ml="21px"
                color="#000"
                fontFamily="Patrick Hand SC"
                fontWeight={500}
                mt="11px"
                fontSize="20px"
            >
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;
