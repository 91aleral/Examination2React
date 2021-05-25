import IndexView from '../views/IndexView/IndexView'
import SearchView from '../views/searchView/SearchView'
import ListView from '../views/ListView/ListView'
import PageNotFound from '../views/PageNotFound/PageNotFound'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import RoutingPath from './RoutingPath'


const Routes = ( { children }) => {
    return (
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path ={RoutingPath.indexView} component ={IndexView} />
                <Route exact path ={RoutingPath.searchView} component ={SearchView} />
                <Route exact path ={RoutingPath.listView} component ={ListView} />
                <Route component ={PageNotFound} />
            </Switch>        
        </BrowserRouter>
    )
}

export default Routes