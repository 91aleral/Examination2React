import { useState } from 'react'
import GetMovieRatingAPIService from '../../shared/api/GetMovieRatingAPIService'
import loadinggif from '../../shared/images/loadgif.gif'

export const GetIMDBRating = (props) => {
    const [ratingData, setRatingData] = useState()
    const [loading, setLoading] = useState(false)
    

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await GetMovieRatingAPIService.getRating(props.id)
            setRatingData(response.data.rating)
            setLoading(false)

        }
        catch (error) {
            console.log("Something went wrong!" + error)
        }
    }

    const imdbButton = () => {
        if(!loading){
            if (!ratingData){
                return <button onClick={() => {fetchData()}}>Get IMDB rating! </button>
            }
            else {
                return <button>IMDB Rating: {ratingData}</button>
            }
        }
        else {
            return <img src={loadinggif} style={{width: 30}}/>
        }
    }


    return (
        <div>
           {imdbButton()}      
        </div>
    )
}
