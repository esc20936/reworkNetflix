import React from 'react'

export default function Card({poster,callback,title}) {


    return (
        <div className='flex flex-col justify-start items-start h-4/5 w-36 mr-8'
            onClick={() => callback(title)}
        >
            {/* image */}
            <div className='flex flex-col justify-center items-center h-full w-full rounded-lg overflow-hidden'>
                <img src={poster} className='h-full w-full object-fill
                    hover:scale-110 transition-all duration-500 ease-in-out
                    filter brightness-75 hover:brightness-100
              ' />

            </div>
        </div>
    )
}
