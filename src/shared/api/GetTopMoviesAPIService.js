import http from './GetTopMoviesAPI'

const getTopMovies = () => {
    let params = {homeCountry: 'US', purchaseCountry: 'US', currentCountry: 'US'}
    return http.get(`?${params}`)

}

export default {getTopMovies}