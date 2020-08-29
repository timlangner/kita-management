import 'date-fns';
import React, {useState} from 'react';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from "../../../utils/useStyles";

export default function AddChild() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <div style={{ display: 'flex' }}>
                        <TextField style={{ marginRight: '20px' }} id="standard-basic" label="Vorname" required />
                        <TextField id="standard-basic" label="Nachname" required/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container>
                                <KeyboardDatePicker
                                    disableToolbar
                                    required
                                    fullWidth
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Geburtstag"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </div>
                    <TextField id="standard-full-width" label="Erziehungsberechtigte/-r" fullWidth required/>

                    <div style={{ textAlign: 'center'}}>
                        <Button style={{ marginTop: '20px' }} type="submit" variant="contained" color="primary">
                            Speichern
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}
