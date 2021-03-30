import { BrowserRouter, Route} from 'react-router-dom'
import App from '../App'
import Login from '../components/Login'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/login" component={Login}></Route>
        </BrowserRouter>
    )
}