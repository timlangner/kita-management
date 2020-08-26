import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import AddChild from "./AddChild/AddChild";
import Groups from "./Groups/Groups";

export default function Administration() {

    return (
        <div style={{ margin: '15px' }}>
            <Groups />
        </div>
    )
}
