import './DisplayMovie.css'
import { GetIMDBRating } from '../getIMDBRating/GetIMDBRating'

export const DisplayMovie = (props) => {

    const addMovieToList = () => {
        props.listMovie(props.movie)

    }

    return (

        <div className='movie_item'>
            <img src={props.img} className='movie_image' />
            <h2 className='movie_title'>{props.title}</h2>
            <p className='movie_info'>Year: {props.year}, {props.actors}</p>

            <GetIMDBRating id={props.id} />
            <button onClick={addMovieToList}>Add to watch-list!</button>

        </div>
    )
}

