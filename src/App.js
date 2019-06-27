import React from 'react';
import {  BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './Components/Main';
import CV from './Components/CV';
import Portfolio from './Components/Portfolio';


class App extends React.Component {
    render() {
        return (
			<BrowserRouter>
				<Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/cv">
                        <CV />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
			   </Switch>
	   		</BrowserRouter>
        );
    }
}

export default App;
