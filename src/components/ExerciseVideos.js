import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "../components/Loader";
const ExerciseVideos = ({ exerciseVideos, name }) => {
    return (
        <Box
            sx={{
                marginTop: {
                    lg: "50px",
                    xs: "20px",
                },
            }}
            p="20px"
        >
            <Typography
                fontFamily="Patrick Hand SC"
                borderBottom="2px solid darkred "
                variant="h4"
                mb="33px"
            >
                Watch{" "}
                <span
                    style={{
                        color: "darkred",
                        fontWeight: "bold",
                    }}
                >
                    {name}
                </span>{" "}
                exercises videos
            </Typography>
            <Stack
                justifyContent="flex-start"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection: {
                        lg: "row",
                    },
                    gap: {
                        lg: "110px",
                        xs: "20px",
                    },
                }}
            >
                {!exerciseVideos.length ? (
                    <Loader />
                ) : (
                    exerciseVideos?.slice(0, 3).map((item, index) => (
                        <a
                            key={index}
                            className="exercise-video"
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="black"
                            rel="noreferrer"
                        >
                            <img
                                src={item.video.thumbnails[0].url}
                                alt={item.video.title}
                            />
                            <Box>
                                <Typography
                                    fontFamily="Patrick Hand SC"
                                    fontSize="24px"
                                    color="black"
                                    fontWeight="600"
                                >
                                    {item.video.title.length > 20
                                        ? item.video.title
                                              .slice(0, 25)
                                              .concat("...")
                                        : item.video.title}
                                </Typography>
                                <Typography
                                    fontFamily="Patrick Hand SC"
                                    fontSize="20px"
                                    color="black"
                                >
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    ))
                )}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
