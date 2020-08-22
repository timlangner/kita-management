import React from 'react';
import Administration from "./Administration/Administration";
import NavBar from "./Navigation/NavBar/NavBar";
import {useStyles} from "../utils/useStyles";


export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar />
            <Administration />
        </div>
    );
}
