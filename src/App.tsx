import React, {useState} from "react";

import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import UncontroledAccordion from "./components/UncontroledAccordion.tsx/UncontroledAccordion";

function App() {
    let items
    // let[ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div>
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange = {() => {setAccordionCollapsed(!accordionCollapsed)}}/>
                 items={items}
            <UncontroledAccordion titleValue={"Users"} />
        </div>
    );
}

// function PageTitle(props: any) {
//     return <h1> {props.title} </h1>
//
// }

export default App;
