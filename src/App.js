import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create/Create.tsx";
import Listing from "./components/Listing/Listing.tsx";
import Update from "./components/Update/Update.tsx";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="main">
                <div className="card setting">
                    <Route exact path="/">
                        <Redirect to="/user/list"/>
                    </Route>
                    <Route exact path='/user/list' component={Listing}/>
                    <Route exact path='/user/create' component={Create}/>
                    <Route exact path='/user/update' component={Update}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
