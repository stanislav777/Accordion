import React from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, Star} from "./components/Rating/Rating";

function App() {
    console.log("App")
    return (
        <div>
            <PageTitle title={"My friends"}/>
            <PageTitle title={"Next page"}/>
            <Rating value={3}/>

            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={2}/>
            <Rating value={20}/>

        </div>

    );
}

function PageTitle(props: any) {
    return <h1> {props.title} </h1>

}

// hello();

export default App;
