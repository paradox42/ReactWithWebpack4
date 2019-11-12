import React from "react";
import ReactDOM from "react-dom";
import style from "./search.css"

const Index = () => {
    return <div className={style.test}>Hello react!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));