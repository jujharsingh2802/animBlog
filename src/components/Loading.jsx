import React from 'react'

function Loading() {
  return (
    <div className="App flex items-center justify-center p-0.5 m-0 outline-none w-full  max-h-screen bg-black">
        <div className="loading-image-container justify-center">
                  <img
              src="images/loading-image.gif"
              alt="Loading  "
              className="loading-image"
            />
            <img
              src="images/anime-nezuko-kamado.gif"
              alt="Loading Image"
              className="loading-image rounded-2xl bg-black"
            />
        </div>    
     </div>
  )
}

export default Loading