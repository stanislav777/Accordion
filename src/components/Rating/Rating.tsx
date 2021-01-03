import React from "react";

export function Rating(props:any) {
    console.log("Rating")
    if (props.value === 1){
        return (
        <div>
            <Star select={true}/>
            <Star select={false}/>
            <Star select={false}/>
            <Star select={false}/>
            <Star select={false}/>
        </div>);
    }
    if (props.value === 2){
        return (
            <div>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={false}/>
                <Star select={false}/>
                <Star select={false}/>
            </div>);
    }
    if (props.value === 3){
        return (
            <div>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={false}/>
                <Star select={false}/>
            </div>);
    }
    if (props.value === 4){
        return (
            <div>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={false}/>
            </div>);
    }
    if (props.value === 5){
        return (
            <div>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={true}/>
                <Star select={true}/>
            </div>);
    }
    return (
        <div>
            <Star select={false}/>
            <Star select={false}/>
            <Star select={false}/>
            <Star select={false}/>
            <Star select={false}/>
        </div>);
}
type StarPropsType = {
    select: boolean
}
export function Star(props: StarPropsType) {
    console.log("Star")
    if (props.select === true) {
        return <span> <b>star</b></span>
    } else {
        return <span> star </span>
    }


}


