import React from 'react'


export default function Hero({urlImage, title, released, countries, runtime, description, rating, actors, directors, genres}) {
    
    urlImage = urlImage ? urlImage : "https://wpshopmart.com/wp-content/uploads/2016/09/404.png"
    title = title ? title : "Title not found"
    directors = directors ? directors : "Directors not found"
    released = released ? released : "Released not found"
    actors = actors ? actors : "Actors not found"
    countries = countries ? countries : "Countries not found"
    // tags = tags ? tags : "Tags not found"
    genres = genres ? genres : "Genres not found"
    runtime = runtime ? runtime : "Runtime not found"
    description = description ? description : "Description not found"
    rating = rating ? rating : "Rating not found"






  return (
    <div className='mainContent absolute top-0 left-0 z-10 w-full h-3/5 flex flex-col justify-center items-center'>
    {/* centered items */}
    <div className='flex flex-row justify-evenly items-center h-full w-4/5 '>

      {/* rounded image left side */}

      <div className='flex flex-col justify-center items-end h-full w-2/6  rounded-sm '>
        {/* image */}
        <div className='flex flex-col justify-center items-center h-3/4 w-7/12 rounded-lg overflow-hidden bg-black'>

          <img src={urlImage} className='h-full w-full object-fill
          hover:scale-110 transition-all duration-500 ease-in-out
          filter brightness-75 hover:brightness-100
          ' />
        </div>
      </div>


      {/* glassmorphism div container */}

      <div className='flex flex-col justify-center items-center h-full w-4/6'>

        {/* main div */}
        <div className='flex flex-col justify-start items-start p-4 h-3/4 w-4/5 rounded-lg'>

          {/* title */}
          <div className='flex flex-row justify-start items-center h-auto w-full'>
            <h1 className='text-4xl font-bold text-white'>{title}</h1>
          </div>

          {/* Director */}
          <div className='flex flex-row justify-start items-center h-auto w-full mt-4'>
            <p className='text-gray-100 text-sm'>Directors: {directors}</p>
          </div>

          {/* actors */}
          <div className='flex flex-row justify-start items-center h-auto w-full mt-1'>
            <p className='text-gray-100 text-sm'>Actors: {actors}</p>
          </div>
          {/* tags */}
          <div className='flex flex-row justify-start items-center h-auto w-full mt-1'>
            <p className='text-gray-500 text-sm'>Tags: {genres}</p>
          </div>

          {/* description */}
          <div className='flex flex-row justify-start items-start h-3/4 w-full mt-8'>
            <p className='text-white text-lg'>{description}</p>
          </div>


          {/* rating */}
          <div className='flex flex-row justify-start items-center h-auto w-full mt-8'>
            <p className='text-gray-100 text-sm'>IMDB Rating: {rating}</p>
          </div>

          {/* buttons */}
          <div className='flex flex-row justify-start items-center h-auto w-full mt-8'>
            {/* on hover animate it to change its round */}
            <button className='bg-gray-100 text-gray-900 text-sm font-bold py-2 px-4 rounded-full
            hover:scale-105 transition-all duration-500 ease-in-out hover:bg-gray-400
            '>Watch Now</button>
            <button className='bg-gray-100 text-gray-900 text-sm font-bold py-2 px-4 rounded-full ml-4
            hover:scale-105 transition-all duration-500 ease-in-out hover:bg-gray-400'>Add to Watchlist</button>
          </div>

        </div>

      </div>



    </div>
  </div>
  )
}
