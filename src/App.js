import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Home';


class App extends React.Component {
    render() {
        return (
			<BrowserRouter>
				<Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
			   </Switch>
	   		</BrowserRouter>
        );
    }
}

export default App;
