function AnimeCard({anime}){

function onFavoriteClick(){
  alert("Since you liked it, this has been added to your favorites :)!")
}

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
  </div>
</div>

}

export default AnimeCard;