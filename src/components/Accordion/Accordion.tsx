import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true){
        return <AccordionTitle title={props.titleValue} />
    }
    return (

        <div>
            <AccordionTitle title={props.titleValue} />
            <AccordionBody/>
        </div>)
}

 type AccordionTitlePropsType = {
    title: string
 }
export function AccordionTitle(props:AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle")
    return (
        <h3>{props.title}</h3>
    )
}

export function AccordionBody() {
    console.log("AccordionBody")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )

}

export default Accordion;