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


//B-1
export const getById=(series, id) =>{
  return series.find(show => show.id === id);
}

//B-2
export const getSeasonsCount=(series) =>{
  return series.map(show => ({
    title: show.title,
    seasons: show.seasons.length
  }));
}

//B-3
export const hasTopEpisode=(show, minRating)=> {
  return show.seasons.some(season =>
    season.episodes.some(episode => episode.rating >= minRating)
  );
}

//B-4
export const getCreatorsFrom = (series, country)=> {
  return series
    .filter(show => show.creator && show.creator.country === country)
    .map(show => show.creator.name);
}

//B-5
export const sortByStartYear=(series) =>{
  return [...series].sort((a, b) => a.startYear - b.startYear);
}

//C-1
export const renameSeries = (series, id, newTitle) => {
  return series.map(show => {
    if (show.id === id) {
      return { ...show, title: newTitle };
    }
    return show;
  });
};

//C-2
export const addSeason = (series, showId, season) => {
  return series.map(show => {
    if (show.id === showId) {
      return {
        ...show,
        seasons: [...show.seasons, season]
      };
    }
    return show;
  });
};