import React from "react";
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from "./App.scss"

const App = () => {
    return (
        <div className={s.content}>Hello World</div>
    )
};

export default withStyles(s)(App);