import React from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import { useStyles } from "../../../utils/useStyles";


export default function AddGroup() {

    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Hinzufügen</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form noValidate autoComplete="off">
                    <TextField style={{ marginRight: '20px' }} id="standard-full-width" label="Name" required fullWidth />
                    <TextField id="standard-full-width" label="Gruppenleiter/-in" fullWidth/>

                    <div style={{ textAlign: 'center'}}>
                        <Button style={{ marginTop: '20px' }} variant="contained" color="primary">
                            Speichern
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}