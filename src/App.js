import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AxiosTut from './Axios/App';
import Boot from './Bootstrap/Btn';
import Accordion from './Accordion/Accordion';
import Params from './Hooks/Params';
import AsioxApi from './ch/AsioxApi';
import Menu from './menu/Menu'
import Search from './Search/Search';
import Weather from './Weather/Weather';
import Api from './Api/Api';

const App = () => {
    const Jio = () =>{
        return (<> <h1>Hello from router</h1></>);
    }
    return (
        <>
            <main>
                <Menu/>
                <Switch>
                    <Route path="/reacttut/" component={AxiosTut} exact/>
                    <Route path="/reacttut/boot" component={Boot} exact/>
                    <Route path="/reacttut/boot/jio" component={Jio} />
                    <Route path="/reacttut/boot/1/:name" component={Params} />
                    <Route path="/reacttut/asiox" component={AsioxApi} />
                    <Route path="/reacttut/search" component={Search} />
                    <Route path="/reacttut/weather" component={Weather} />
                    <Route path="/reacttut/api" component={Api} />
                    <Route component={Accordion}/>
                </Switch>
            </main>
        </>
    );
};

export default App;