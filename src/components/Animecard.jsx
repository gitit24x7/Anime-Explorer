function AnimeCard({anime}){

function onFavoriteClick(){
  alert("Since you liked it, this has been added to your favorites :)!")
}

const scoreText = anime?.score != null ? Number(anime.score).toFixed(1) : "N/A";

return <div className="anime-card">
  <div className="anime-poster">
    <img src={anime.url || "https://via.placeholder.com/300x450?text=No+Image"} alt={anime.title}/>
    <div className="anime-overlay">
      <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
    </div>
  </div>

  <div className="anime-info">
    <h3>{anime.title}</h3>
    <p>{anime.release_date}</p>
     <div className="anime-rating" title={anime.score ? `Score: ${scoreText}` : "No score"}>
      <span className="star">★</span>
      <span className="score-text">{scoreText}</span>
    </div>
  </div>
</div>

}

export default AnimeCard;