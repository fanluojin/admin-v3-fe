import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from 'react-router-dom';

import Layout from 'components/layout/index.jsx';
import Home from 'page/home/index.jsx';

class App extends Component {
    
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" component={Home}/>
                        <Route path="/product" component={Home}/>
                        <Route path="/product-category" component={Home}/>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)