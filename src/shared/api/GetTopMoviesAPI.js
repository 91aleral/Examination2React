import Axios from 'axios'



const GetTopMoviesAPI = Axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
  headers: {
    'x-rapidapi-key': 'd840ad1d54mshdc120a1cf6cae76p15cc91jsna2fa6c725a0c',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
})

export default GetTopMoviesAPI