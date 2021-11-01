import { Switch, Route } from "react-router-dom";
import Home from "../../containers/Home";
import ResultPage from "../../containers/ResultPage";

/**
 * Routes
 * @returns Routes 
 */
const Routes = () => {
    return (
        <Switch>
            <Route path="/resultado" component={ResultPage}/>
            <Route exact path="/" component={Home} />
        </Switch>
    );
};

export default Routes;