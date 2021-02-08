import React, {useState} from "react";

export function UncontrolledRating(props:any) {

    let [value, setValue] = useState(5)

        return (
        <div>
            <Star select={value > 0} value={1} setValue={setValue}/>
            <Star select={value > 1} value={2} setValue={setValue}/>
            <Star select={value > 2} value={3} setValue={setValue}/>
            <Star select={value > 3} value={4} setValue={setValue}/>
            <Star select={value > 4} value={5} setValue={setValue}/>
        </div>);
    }
type StarPropsType = {
    select: boolean
    value:  1|2|3|4|5
    setValue: (value: 1|2|3|4|5) => void
}
export function Star(props: StarPropsType) {
    return <span
        onClick={() => {props.setValue(props.value) }}> {(props.select) ?  <b>star </b> :  "star " }
    </span>

}