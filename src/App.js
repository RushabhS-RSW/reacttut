import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import AxiosTut from './Axios/App';
import Boot from './Bootstrap/Btn';
import Accordion from './Accordion/Accordion';
import Params from './Hooks/Params';
import AsioxApi from './ch/AsioxApi';
import { Link } from 'react-router-dom';
import Menu from './menu/Menu'
import Search from './Search/Search';

const App = () => {
    const Jio = () =>{
        return (<> <h1>Hello from router</h1></>);
    }
    const activeClass = {
        color: '#000',
    };
    return (
        <>
            <main>
                <Menu/>
                <Switch>
                    <Route path="/" component={AxiosTut} exact/>
                    <Route path="/boot" component={Boot} exact/>
                    <Route path="/boot/jio" component={Jio} />
                    <Route path="/boot/1/:name" component={Params} />
                    <Route path="/asiox" component={AsioxApi} />
                    <Route path="/search" component={Search} />
                    <Route component={Accordion}/>
                </Switch>
            </main>
        </>
    );
};

export default App;