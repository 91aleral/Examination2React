import { GetIMDBRating } from '../getIMDBRating/GetIMDBRating'

export const DisplayWatchedMovies = (props) => {


    return (
    
            
                <div className='movie_item'>
                    <img src={props.img} className='movie_image'/>
            <h2 className='movie_title'>{props.title} , {props.year}</h2>
            <h2> {props.actors}</h2>
            <p className='movie_info'>Your rating: {props.userRating}   <br/>  Comment: {props.userComment}</p>

            <GetIMDBRating id={props.id} />
            
                     
            
        
        </div>
    )
}
