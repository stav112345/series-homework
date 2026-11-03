
export const getDramas = (series) => series.filter(show => show.genre === "Drama");
console.log(getDramas(series).map(serie => serie.title));

export const getEpisodeById = (season, idText) =>
season.episodes.find(episode => episode.id === Number(idText));
console.log(getEpisodeById ? getEpisodeById.title : "not found")

export const addEpisodeToFirstSeason = (show, newEpisode) => {
  return {...show,seasons: show.seasons.map((season, index) => {
      if (index === 0)
         { return { ...season,episodes: [...season.episodes, newEpisode] };
         }
      return season;
    })
  };
};