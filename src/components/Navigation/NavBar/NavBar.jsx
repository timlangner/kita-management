import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { useStyles } from "../../../utils/useStyles";
import Sidebar from "../Sidebar/Sidebar";

export default function NavBar() {
    const classes = useStyles();

    const [openNav, setOpenNav] = useState(false);

    return (
        <div>
            <Sidebar openNav={openNav} setOpenNav={setOpenNav}/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {
                        setOpenNav(true);
                    }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Gruppen
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}