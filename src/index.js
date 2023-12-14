import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PlayerSetting from "./component/player/Setting";
import GameSelect from "./component/game/Select";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlayerInfo from "./component/player/Info";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/layout/Header";
import {Container} from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <Container className="vh-100">
            <Routes>
                <Route path='/' element={<GameSelect/>}></Route>
                <Route path='/players'>
                    <Route path='/players/setting/:gameId' element={<PlayerSetting/>}></Route>
                    <Route path='/players/info' element={<PlayerInfo/>}></Route>
                </Route>
                <Route path='/*' element={<div>Error Page</div>}></Route>
            </Routes>
        </Container>
    </BrowserRouter>
);

reportWebVitals();
