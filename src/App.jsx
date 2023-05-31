import Hero from './Components/Hero/Hero'
import Carousel from './Components/Carousel/Carousel'
import '../dist/tailwindOutput.css'
import { useState, useEffect } from 'react'
import getRandomMovie from './Utils/Fetchers/RandomMovie'
import getMoviesRelatedByGenre from './Utils/Fetchers/getMoviesRelatedByGenre'
import getMovieByName from './Utils/Fetchers/getMovieByName'
import getMoviesByActors from './Utils/Fetchers/getMoviesByActors'
function App() {

  const [heroMoviePoster, setHeroMoviePoster] = useState("https://media2.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif?cid=ecf05e47xqby3x0hrl3wpnmct41ho0r6sfov2zvpk0mmp2zf&ep=v1_gifs_search&rid=giphy.gif&ct=g")
  const [heroMovieTitle, setHeroMovieTitle] = useState("")
  const [heroMovieDirectors, setHeroMovieDirectors] = useState("")
  const [heroMovieActors, setHeroMovieActors] = useState("")
  const [heroMovieTags, setHeroMovieTags] = useState("")
  const [heroMovieCountriesReleased, setHeroMovieCountriesReleased] = useState("")
  const [heroMovieReleased , setHeroMovieReleased] = useState("")
  const [heroMovieRuntime, setHeroMovieRuntime] = useState("")
  const [heroMovieDescription, setHeroMovieDescription] = useState("")
  const [heroMovieRating, setHeroMovieRating] = useState("")


  const [relatedMoviesByGenre, setRelatedMoviesByGenre] = useState([])
  const [relatedMoviesByActors, setRelatedMoviesByActors] = useState([])

  useEffect(() => {
    getRandomMovie().then((movie) => {
      setHeroMoviePoster(movie.poster)
      setHeroMovieTitle(movie.title)
      setHeroMovieRuntime(movie.runtime)
      setHeroMovieDescription(movie.plot)
      setHeroMovieRating(movie.imdbRating)
      setHeroMovieReleased(movie.released)

      let actors = ""
      movie.actors.forEach((actor) => {
        actors += actor + ", "
      })
      actors = actors.slice(0, -2)
      setHeroMovieActors(actors)


      let tempCountries = ""
      movie.countries.forEach((country) => {
        tempCountries += country + ", "
      })
      tempCountries = tempCountries.slice(0, -2)

      let genres = ""
      movie.genres.forEach((genre) => {
        genres += genre + ", "
      })
      genres = genres.slice(0, -2)
      setHeroMovieTags(genres)

      let directors = ""
      movie.directors.forEach((director) => {
        directors += director + ", "
      })
      directors = directors.slice(0, -2)
      setHeroMovieDirectors(directors)


      setHeroMovieCountriesReleased(tempCountries)
      // set

      

      getMoviesRelatedByGenre(heroMovieTags.split(",")[0],heroMovieTitle).then((movies) => {
        setRelatedMoviesByGenre(movies)
      })

      // getMoviesByActors(movie.actors).then((movies) => {
      //   setRelatedMoviesByActors(movies)
      // })



      
    }
    )

    // validate that heroMovieTitle and heroMovieTags are not empty
    
   


  }, [])


  const surprise = () => {

    getRandomMovie().then((movie) => {
      setHeroMoviePoster(movie.poster)
      setHeroMovieTitle(movie.title)
      setHeroMovieRuntime(movie.runtime)
      setHeroMovieDescription(movie.plot)
      setHeroMovieRating(movie.imdbRating)
      setHeroMovieReleased(movie.released)

      let actors = ""
      movie.actors.forEach((actor) => {
        actors += actor + ", "
      })
      actors = actors.slice(0, -2)
      setHeroMovieActors(actors)


      let tempCountries = ""
      movie.countries.forEach((country) => {
        tempCountries += country + ", "
      })
      tempCountries = tempCountries.slice(0, -2)

      let genres = ""
      movie.genres.forEach((genre) => {
        genres += genre + ", "
      })
      genres = genres.slice(0, -2)
      setHeroMovieTags(genres)

      let directors = ""
      movie.directors.forEach((director) => {
        directors += director + ", "
      })
      directors = directors.slice(0, -2)
      setHeroMovieDirectors(directors)


      setHeroMovieCountriesReleased(tempCountries)
      getMoviesRelatedByGenre(heroMovieTags.split(",")[0],heroMovieTitle).then((movies) => {
        setRelatedMoviesByGenre(movies)
      })
    }
    )

  }


  const callbackForCarrouselCards = (movieTitle) => {
    getMovieByName(movieTitle).then((movie) => {
      setHeroMoviePoster(movie.poster)
      setHeroMovieTitle(movie.title)
      setHeroMovieRuntime(movie.runtime)
      setHeroMovieDescription(movie.plot)
      setHeroMovieRating(movie.imdbRating)
      setHeroMovieReleased(movie.released)

      let actors = ""
      movie.actors.forEach((actor) => {
        actors += actor + ", "
      })
      actors = actors.slice(0, -2)
      setHeroMovieActors(actors)


      let tempCountries = ""
      movie.countries.forEach((country) => {
        tempCountries += country + ", "
      })
      tempCountries = tempCountries.slice(0, -2)

      let genres = ""
      movie.genres.forEach((genre) => {
        genres += genre + ", "
      })
      genres = genres.slice(0, -2)
      setHeroMovieTags(genres)

      let directors = ""
      movie.directors.forEach((director) => {
        directors += director + ", "
      })
      directors = directors.slice(0, -2)
      setHeroMovieDirectors(directors)


      setHeroMovieCountriesReleased(tempCountries)
      getMoviesRelatedByGenre(heroMovieTags.split(",")[0],heroMovieTitle).then((movies) => {
        setRelatedMoviesByGenre(movies)
      })
    }
    )
  }





  


  return (
    // here we should add the color gradient
    <div className={`relative h-full w-full bg-slate-800`}>
      <div className='gradiente w-full h-3/5 aboslute top-0 left-0 z-0 ' />
      <Hero
        urlImage={heroMoviePoster}
        title={heroMovieTitle}
        directors={heroMovieDirectors}
        released={heroMovieReleased}
        actors={heroMovieActors}
        countries={heroMovieCountriesReleased}
        runtime={heroMovieRuntime}
        description={heroMovieDescription}
        rating={heroMovieRating}
        genres = {heroMovieTags}

      />
      <div className='relative  z-10 w-full h-auto p-16 flex flex-col justify-start items-center bg-black'>
        <div className='flex flex-col justify-start items-start h-auto w-full p-4'>
          <h1 className='text-4xl font-bold text-white'> Recommendations </h1>
        </div>
        <Carousel moviesPosters={relatedMoviesByGenre} sectionTitle={"genre"} callback={callbackForCarrouselCards} />
        {/* <Carousel moviesPosters={moviesPosters} sectionTitle={"Director"} /> */}
        {/* <Carousel moviesPosters={relatedMoviesByActors} sectionTitle={"Actors"} /> */}
        <div className='fixed bottom-0 left-0 z-50 w-full h-16  flex justify-end items-center
        '>
          <button className='rounded-full bg-red-500 text-white font-bold text-xl w-32 h-12 mr-8
            hover:bg-red-600 hover:text-gray-100 transition duration-300 ease-in-out
            hover:animate-bounce
          '
            onClick={() => surprise()}
          >
            Shuffle
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

