import { useState, useEffect } from 'react'
import MovieAPIService from '../../shared/api/MovieAPIService'
import { DisplayMovie } from '../displayMovie/DisplayMovie'
import loadinggif from '../../shared/images/loadgif.gif'



const MovieSearch = (props) => {
    const [addToWatchList, setAddToWatchList] = useState([])
    const [queryData, setQueryData] = useState()
    const [movieName, setMovieName] = useState()
    const [loading, setLoading] = useState(false)


    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await MovieAPIService.searchMovie(movieName)
            setQueryData(response.data.d)
            setLoading(false)

        }
        catch (error) {
            console.log("Something went wrong!" + error)
        }
    }

    const loadWatchList = () => {
        const toWatchArray = JSON.parse(localStorage.getItem('watchList'))
        setAddToWatchList(toWatchArray)

    }

    useEffect(() => {
        loadWatchList()

    }, [])


    const addWatchList = (movie) => {
        
        
        if (!addToWatchList){
            setAddToWatchList([movie])
        }
        setAddToWatchList(addToWatchList => [...addToWatchList, movie])
        localStorage.setItem('watchList', JSON.stringify(addToWatchList))
    }



    const renderData = () => {
        if(!loading){
            if (!queryData) {
                return <p>No data to show!</p>
            }
            else if (queryData.length > 0) {
                return queryData.map(movie => <DisplayMovie title={movie.l} id={movie.id} year={movie.y} actors={movie.s} img={movie.i.imageUrl} movie={movie} listMovie={addWatchList} />)
            }
        }
        else {  
            return <img src={loadinggif} style={{width: 100}}/>     
       }

    }



    return (
        <div>
            <h1>Find a new movie!</h1>
            <input placeholder='Movie name' onChange={(event) => { setMovieName(event.target.value) }} />
            <button onClick={fetchData}>Search!</button><br></br>
            {renderData()}




        </div>
    )
}

export default MovieSearch
