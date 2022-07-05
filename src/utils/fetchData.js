export const exerciseOptions = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_API_YOUTUBE,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_API_YOUTUBE,
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
