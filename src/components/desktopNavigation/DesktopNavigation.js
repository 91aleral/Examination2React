import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'

const DesktopNavigation = () => {
    const history = useHistory()
    

    

    return (
        
            <div className='navigationWrapper'>
                <span className='buttonSearch' onClick={() => history.push('/search')}>Find movies!</span>
                <span className='buttonWatched'onClick={() => history.push('/index')}>Watched movies!</span>
                <span className='buttonToWatch'onClick={() => history.push('/list')}>Want-to-watch movies!</span>              
    
                
            </div>
        
    )
}

export default DesktopNavigation
