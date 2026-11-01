//A-1
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => 
    {
    return show.seasons[seasonIndex].episodes[episodeIndex].title;
};

//A-2
export const getLastSeasonNumber = (show) => {
     if(!show.seasons || show.seasons.length()===0)
        return 0;
    else return show.seasons[show.seasons.length].number;
};

//A-3
export const getNextSeasonYear = (show) =>
{
return show.nextSeason?.year ?? "No announcement";
}