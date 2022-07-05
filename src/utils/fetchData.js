const apiKey = process.env.REACT_API_YOUTUBE;

export const exerciseOptions = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
        "X-RapidAPI-Key": "4e8d3ea0abmsh1d8791c22f4e2a8p153417jsn87f8204a8cef",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "4e8d3ea0abmsh1d8791c22f4e2a8p153417jsn87f8204a8cef",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
