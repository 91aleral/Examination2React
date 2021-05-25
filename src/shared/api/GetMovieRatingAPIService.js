import http from '././GetMovieRatingAPI'

const getRating = (movie) => {
    return http.get(`?tconst=${movie}`)

}

export default {getRating}