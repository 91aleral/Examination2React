import { useState, useEffect } from 'react'
//import './ListMovies.css'
import DisplayWatchedMovie from '../displayWatchedMovies/DisplayWatchedMovies'
import { DisplayToWatchMovies } from '../displayToWatchMovies/DisplayToWatchMovies'


const ListMovies = () => {
    const [watchedMovies, setWatchedMovies] = useState([])

    const [toWatchMovies, setToWatchMovies] = useState()


    const loadToWatchMovies = () => {
        const toWatchArray = JSON.parse(localStorage.getItem('watchList'))
        setToWatchMovies(toWatchArray)
    }

    const loadWatchedMovies = () => {
        const watchedArray = JSON.parse(localStorage.getItem('watchedMovies'))
        setWatchedMovies(watchedArray)
    }

    useEffect(() => {
        loadToWatchMovies();
        loadWatchedMovies()

    }, [])
    

    const addWatchedMovies = (movie, comment, rating) => {   
        if(!watchedMovies){
            movie = {...movie, userComment: comment, userRating: rating}
        setWatchedMovies([movie])
        localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies))
        console.log(movie.id) 
        handleRemove(movie.id)
        }
        else {
            movie = {...movie, userComment: comment, userRating: rating}
            setWatchedMovies(watchedMovies => [...watchedMovies, movie])
        localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies))
        console.log(movie.id)  
        handleRemove(movie.id)

        }

        
        
    }  

    const handleRemove = (id) => {
    console.log(toWatchMovies)
    const newList = toWatchMovies.filter((movie) => movie.id !== id);
        
    setToWatchMovies(newList)
    
    localStorage.setItem('watchList', JSON.stringify(toWatchMovies))

    }
    

    

    const renderToWatch = () => {
        if (!toWatchMovies){
            return <p>No data to show!</p>
        }
        else if (toWatchMovies.length > 0){
            return toWatchMovies.map(movie => <DisplayToWatchMovies setAddWatchedMovie={addWatchedMovies} title={movie.l} id={movie.id} year={movie.y} actors={movie.s} img={movie.i.imageUrl} movie={movie}/>)
        } 

    }




    return (
        <div className='movieListsWrapper'>
            <div className='to-watchList'>
                <h1>Your watch-list!</h1>  
               {renderToWatch()}
                
            </div>        
    </div>
    )
}

export default ListMovies
