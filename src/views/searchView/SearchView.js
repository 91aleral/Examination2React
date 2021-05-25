import { useState } from 'react'
import './SearchView.css'
import MovieAPI from '../../shared/api/MovieAPI'
import MovieSearch from '../../components/movieSearch/MovieSearch'


const SearchView = () => {
    const [movieData, setMovieData] = useState()


    const getData = (props) => {
        setMovieData(props)
        console.log('from searchView')
        console.log(movieData)
    }


    return (
        <div>   
            <MovieSearch getData={getData} />
        </div>
    )
}

export default SearchView