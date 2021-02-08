import React, {useState} from "react";

import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontroledAccordion from "./components/UncontroledAccordion.tsx/UncontroledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    // let[ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div>
            {/*<Rating value={ratingValue}*/}
            {/*         N = {setRatingValue} />*/}


            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange = {() => {setAccordionCollapsed(!accordionCollapsed)}}/>

            <UncontroledAccordion titleValue={"Users"} />
            {/*<UncontrolledRating />*/}


            {/*<Rating value={3}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

// function PageTitle(props: any) {
//     return <h1> {props.title} </h1>
//
// }

export default App;
