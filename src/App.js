import React from 'react';
import './App.css';
import Nav from './views/Nav';
import MovieList from "./views/MovieList";
import {MovieProvider} from './contexts/MovieContext';
import AddMovie from "./views/AddMovie";

function App() {
    return (
        <MovieProvider>
            <div className="App">
                <Nav/>
                <MovieList/>
                <AddMovie/>
            </div>
        </MovieProvider>
    );
}

export default App;
