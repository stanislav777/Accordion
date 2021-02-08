import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type  RatingPropsType = {
    value: RatingValueType
    N: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star select={props.value > 0} onClick={props.N} value={1}/>
            <Star select={props.value > 1} onClick={props.N} value={2}/>
            <Star select={props.value > 2} onClick={props.N} value={3}/>
            <Star select={props.value > 3} onClick={props.N} value={4}/>
            <Star select={props.value > 4} onClick={props.N} value={5}/>
        </div>);
}


type StarPropsType = {
    select: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => {props.onClick(props.value)}}>
            {(props.select) ? <b> star</b> : " star"
        } </span>)
}


