import React from 'react';
import './App.css';
import { Article, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Education, Skills, About } from './containers';
const App = () => {
    return ( <
        div className = 'App' >
        <
        div className = 'gradient__bg' >
        <
        Navbar / >
        <
        Header / >
        <
        /div>  <
        Skills / >
        <
        Education / >
        <
        Blog / >
        <
        About / >
        <
        CTA / >
        <
        Footer / >
        <
        /div>
    )
}

export default App