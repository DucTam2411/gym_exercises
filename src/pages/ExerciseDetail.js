import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();
    const [exerciseVideos, SetExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseUrl = "https://exercisedb.p.rapidapi.com/exercises";
            const youtubeSearchUrl =
                "https://youtube-search-and-download.p.rapidapi.com";

            const exerciseDetailData = await fetchData(
                `${exerciseUrl}/exercise/${id}`,
                exerciseOptions
            );
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(
                `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
                youtubeOptions
            );
            SetExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(
                `${exerciseUrl}/target/${exerciseDetailData.target}`,
                exerciseOptions
            );
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(
                `${exerciseUrl}/equipment/${exerciseDetailData.equipment}`,
                exerciseOptions
            );
            setEquipmentExercises(equipmentExercisesData);
        };

        fetchExerciseData();
        window.scrollTo({
            top: 0,
            behavior: "smooth", // for smoothly scrolling
        });
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
                target={exerciseDetail.target}
                equipment={exerciseDetail.equipment}
            />
        </Box>
    );
};

export default ExerciseDetail;
