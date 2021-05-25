import Axios from 'axios'



const MovieAPI = Axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com/auto-complete',
  headers: {
    'x-rapidapi-key': 'd840ad1d54mshdc120a1cf6cae76p15cc91jsna2fa6c725a0c',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
})

export default MovieAPI

/*
const MovieAPI = () => {






  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: { q: 'game of thr' },
    headers: {
      'x-rapidapi-key': 'd840ad1d54mshdc120a1cf6cae76p15cc91jsna2fa6c725a0c',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };

  Axios.request(options).then(function (response) {
    console.log(response.data)

    setQueryData(response.data)

    let dataArray = queryData

  }).catch(function (error) {
    console.error(error);
  });


  return queryData

 



}
*/





