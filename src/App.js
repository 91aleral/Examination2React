import './App.css';
import Routes from './routes/Routes'
import DesktopNavigation from './components/desktopNavigation/DesktopNavigation'
import GetTopMoviesAPIService from './shared/api/GetTopMoviesAPIService'
import { useState, useEffect, useContext } from 'react'
import Loadgif from './shared/images/loadgif.gif'
import {DataProvider, DataContext} from './shared/global/provider/DataProvider'


function App() {
  const [loading, setLoading] = useState()
  const [globalData, setGlobalData] = useContext(DataContext)

  


  const getInitialData = async () => {
    try {
        setLoading(true)
        const response = await GetTopMoviesAPIService.getTopMovies()
        console.log(response.data)
        //setGlobalData(response.data)
       // console.log(globalData)
        setLoading(false)

    }
    catch (error) {
        console.log("Something went wrong!" + error)
    }
}

    useEffect(() => {
    getInitialData()
    

    }, [])


  const renderApp = () => {

    if(!loading){
      
      
      <div className="App">
        <DataProvider>
        <Routes>
           <DesktopNavigation />
        </Routes>
        </DataProvider>
    </div>
      
   
    }
    else {
      <div className="App">
        <img src={Loadgif} />

      </div>
    }
    


  }



  return (
    
    <div className="App">
      <DataProvider>
      <Routes>
        <DesktopNavigation />
      </Routes>
      </DataProvider>
    </div>
    
  );
}

export default App;
