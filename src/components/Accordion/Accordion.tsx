import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string[]
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} t={ props.onChange}/>
        {props.collapsed && <AccordionBody items={props.items} />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    t: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.t()
        }}>-- {props.title} --</h3>
    )
}

type AccordionBodyPropsType = {
    items: string[]
}

export function AccordionBody(props:AccordionBodyPropsType) {
    console.log("AccordionBody")
    return (
        <ul>
            {props.items.map((i, index) => <li key = {index}>{i}</li>)
            }
        </ul>
    )
}

export default Accordion;