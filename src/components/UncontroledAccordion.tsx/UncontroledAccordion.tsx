import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontroledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} tut={() => setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}

    </div>
}

type AccordionTitlePropsType = {
    title: string
    tut: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={() => props.tut()}>-- {props.title} --</h3>
    )
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )

}

export default UncontroledAccordion;