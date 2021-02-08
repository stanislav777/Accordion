import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Rating,RatingValueType} from "./Rating";



export default {
    title: 'Rating stories',
    component: Rating,
    };


export const EmptyRating = () => <Rating value={0} N={x=>x} />;
export const Rating1 = () => <Rating value={1} N={x=>x} />;
export const Rating2 = () => <Rating value={2} N={x=>x} />;
export const Rating3 = () => <Rating value={3} N={x=>x} />;
export const Rating4 = () => <Rating value={4} N={x=>x} />;
export const Rating5 = () => <Rating value={5} N={x=>x} />;
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} N={setRating}/>
};

