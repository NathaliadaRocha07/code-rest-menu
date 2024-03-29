import React from "react";
//import "./style.css";

export default function Drinks({title, price, description}) {

    return (
        <a href="item_dark.html" className="pt-3">
            <div className="d-flex align-content-around flex-wrap">
                <div className="p-3 my_l col-9 my_h2">{title}</div>
                <div className="p-3 my_l col-3 my_h4 text-end">{price}</div>
                <div className="p-3 pt-0 my_l col-9 my_p2">{description}</div>
                <div className="p-3 pt-0 my_l col-3 my_h4 text-end"></div>
            </div>
        </a>
    );
}