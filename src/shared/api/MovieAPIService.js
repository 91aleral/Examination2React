import http from './MovieAPI'

const searchMovie = (movie) => {
    return http.get(`?q=${movie}`)

}

export default {searchMovie}