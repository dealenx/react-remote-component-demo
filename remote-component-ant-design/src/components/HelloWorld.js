import React from "react";

import { DatePicker } from 'antd';


export const HelloWorld = ({children}) => {
    console.log("children", children);
    return <div>
        <DatePicker />
    </div>
}

