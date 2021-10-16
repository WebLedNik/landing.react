import './App.css';

import {Route, Switch} from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import Main from "../pages/Main/Main";

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>

            {/*404*/}
            <Route component={NotFound}/>
        </Switch>
    )
}

export default App;
