import React from 'react'
import Card from '../Card/Card'

export default function Carousel({ moviesPosters, sectionTitle, callback }) {
    // console.log(moviesPosters)
    sectionTitle = sectionTitle ? sectionTitle : "Genre"

    return (
        <div className='flex flex-col justify-start items-start h-2/6 w-full mt-8'>
            {/* section title */}
            <div className='flex flex-col justify-start items-start h-auto w-full'>
                {/* suggestions */}
                <h1 className='text-xl font-bold text-white ml-4'>By {sectionTitle} </h1>
            </div>
            <div className='flex flex-col justify-start items-start h-full w-full overflow-x-scroll overflow-y-hidden mt-4'>
                {/* container */}
                <div className='flex flex-row justify-start items-center h-full w-auto first:ml-4'>
                    {/* cards */}
                    {
                        moviesPosters.map((poster, index) => {
                            return <Card key={index} poster={poster.poster} title={poster.title} callback={callback} />
                        })
                    }

                </div>


            </div>
        </div>
    )
}
