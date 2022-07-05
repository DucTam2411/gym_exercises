import React, { useEffect, useState } from "react";

import { Pagination, Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOffFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercises = exercises.slice(
        indexOffFirstExercise,
        indexOfLastExercise
    );

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({
            top: 1800,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        const fetchExercisesData = async () => {
            if (bodyPart !== "all") {
                const exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions
                );

                setExercises(exercisesData);
            } else {
                const exercisesData = await fetchData(
                    "https://exercisedb.p.rapidapi.com/exercises",
                    exerciseOptions
                );
                setExercises(exercisesData);
            }
        };
        fetchExercisesData();
    }, [bodyPart, setExercises]);

    return (
        <Box
            id="exercises"
            sx={{
                mt: {
                    lg: "110px",
                },
            }}
            mt="50px"
            p="20px"
        >
            <Typography
                fontFamily="Patrick Hand SC"
                variant="h4"
                mb="26px"
                ml="30px"
            >
                Showing Results
            </Typography>

            <Stack
                direction="row"
                sx={{
                    gap: {
                        lg: "110px",
                        xs: "50px",
                    },
                }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>

            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="error"
                        shape="rounded"
                        fontFamily="Patrick Hand SC"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                        sx={{
                            fontFamily: "Patrick Hand SC",
                        }}
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
