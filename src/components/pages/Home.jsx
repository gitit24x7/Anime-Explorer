import AnimeCard from "../Animecard"
import { useState } from "react"
import { getFullAnime } from "../../Services/Api";
import { getTopAnime } from "../../Services/Api";
import { searchAnime } from "../../Services/Api";
import { useEffect } from "react";
import Hiddengems from "./Hidden-Gems";

function Home(){

  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const[searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let mounted = true
    async function fetchData() {
      try {
        setLoading(true)
        const data = await getTopAnime(1, 12) // fetch top 12 anime
        if (mounted) setAnimes(data)
      } catch (err) {
        if (mounted) setError(err.message || "Failed to load anime")
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchData()
    return () => { mounted = false }
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

    const handleSearch = async (e) => {  
      e.preventDefault()

      if (!searchQuery.trim()) {
      alert("Please enter an anime name to search");
      return;
    }

      try {
    setLoading(true)
    setError(null)
    const data = await searchAnime(searchQuery)
    setAnimes(data)
  } catch (err) {
    setError(err.message || "Failed to search anime")
  } finally {
    setLoading(false)
  }

  if (loading) return <div><h3>Loading....</h3></div>
  if (error) return <div>{error}</div>

}
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
              <input type="text" placeholder="Search for your favorite Anime" className="inputsearch" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}></input>
              <button type="submit" className="Submit-button">Submit</button>
            </form>
             <div className="anime-grid">
            {animes.map(a => (
        //We are writing some defensive code below with optional chaining      
        <AnimeCard key={a.mal_id} anime={{
          title: a.title,
          url: a.images?.jpg?.webp ||a.images?.jpg?.large_image_url || a.images?.jpg?.image_url || "",
          release_date: a.aired?.from?.split("T")[0] || "",
          score: a.score ?? null
        }}/>
      ))}
          </div>
        </div>
    )
}

export default Home