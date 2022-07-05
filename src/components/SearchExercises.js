import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
    const [search, setSearch] = useState();
    //  const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchBodyPartsData = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                exerciseOptions
            );

            setBodyParts(["all", ...bodyPartsData]);
        };
        fetchBodyPartsData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOptions
            );

            const searchedExercises = exercisesData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search)
            );

            setSearch("");
            setExercises(searchedExercises);
        }
    };
    return (
        <Stack alignItems="center" mt="36px" justifyContent="center" p="20px">
            <Typography
                fontFamily="Patrick Hand SC"
                fontWeight={300}
                mt={4}
                align="center"
                sx={{
                    fontSize: {
                        lg: "44px",
                        xs: "30px",
                    },
                }}
                mb="50px"
            >
                Awesome Exercises You Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    value={search}
                    type="type"
                    sx={{
                        fontSize: "20px",
                        border: "none",
                        input: {
                            fontWeight: "400",
                            border: "none",
                            fontFamily: "Patrick Hand SC",
                        },
                        width: {
                            lg: "800px",
                            xs: "250px",
                        },

                        backgroundColor: "white",
                    }}
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                    }}
                    placeholder="Search Exercises"
                ></TextField>
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#ff2625",
                        color: "#fff",
                        textTransform: "none",
                        width: {
                            lg: "175px",
                            xs: "80px",
                        },
                        fontSize: {
                            lg: "20px",
                            xs: "14px",
                        },
                        height: "56px",
                        position: "absolute",
                        right: "0",
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    p: "20px",
                }}
            >
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    isBodyPart
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
