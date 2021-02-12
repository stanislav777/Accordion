import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion stories',
    component: Accordion,
    };

const callback = action("accordion mode change event fired")
export const MenuCollapsedMode = () => <Accordion collapsed={true} onChange={callback} titleValue={"Menu"}  items={[]}/>;
export const UsersUnCollapsedMode = () => <Accordion onChange={callback} collapsed={false} titleValue={"Users"}  items={["Dimych", "Stas","Victor"]} />;

// export const ChangeRating = () => {
//     const [rating, setRating] = useState<RatingValueType>(3)
//     return <Rating value={rating} N={setRating}/>
// };

