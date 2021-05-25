import { useState, useEffect } from 'react'
import { DisplayWatchedMovies } from '../displayWatchedMovies/DisplayWatchedMovies'


export const ListWatchedMovies = () => {
    const [watchedMovies, setWatchedMovies] = useState()



    const loadWatchedMovies = () => {
        const watchedArray = JSON.parse(localStorage.getItem('watchedMovies'))
        setWatchedMovies(watchedArray)
    }

    useEffect(() => {
        loadWatchedMovies()
    }, [])

    const renderWatched = () => {
        if (!watchedMovies){
            return <p>No data to show!</p>
        }
        else if (watchedMovies.length > 0){
            return watchedMovies.map(movie => <DisplayWatchedMovies userComment={movie.userComment} userRating={movie.userRating} img={movie.i.imageUrl} title={movie.l} id={movie.id} year={movie.y} actors={movie.s}/>)
        }


    }

    return (
        <div>
            <h1>Your completed films!</h1>
            {renderWatched()}
        </div>
    )
}


