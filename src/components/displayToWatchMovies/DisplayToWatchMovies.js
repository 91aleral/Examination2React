import { GetIMDBRating } from '../getIMDBRating/GetIMDBRating'
import { useState } from 'react'

export const DisplayToWatchMovies = (props) => {
    const [comment, setComment] = useState()
    const [rating, setRating] = useState()

    const addToWatchedMovies = () => {
        if (!comment || !rating){
           return alert('You have to enter a comment & score on the movie!')
           }
        props.setAddWatchedMovie(props.movie, comment, rating)
    }

  


 

    return (
        <div className='movie_item'>
    <img src={props.img} className='movie_image'/>
    <h2 className='movie_title'>{props.title} , {props.year}</h2>
    <h2>{props.actors}</h2>
    <p className='movie_info'>    <input type="text" placeholder="Enter comment" onChange={(event) => {setComment(event.target.value)}}></input><br/>
    <input type="number" placeholder="Rate 1-10" min='1' max='10' onChange={(event) => {setRating(event.target.value)}}></input><br/>
    <button onClick={addToWatchedMovies}>I've seen it! (Add to watched-list!)</button></p>
    

    <GetIMDBRating id={props.id} />
    
</div>)
}


