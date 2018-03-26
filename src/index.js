import React from "react";
import ReactDOM from "react-dom";
import App from './app/App';
import WithStylesContext from './WithStylesContext';

ReactDOM.render(
    <WithStylesContext onInsertCss={styles => styles._insertCss()}>
        <App />
    </WithStylesContext>,
    document.getElementById("index")
);