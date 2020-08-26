import 'date-fns';
import React, {useState} from 'react';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useTheme from "@material-ui/core/styles/useTheme";
import InputLabel from "@material-ui/core/InputLabel";
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from "../../../utils/useStyles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, groupName, theme) {
    return {
        fontWeight:
            groupName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

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
                <form noValidate autoComplete="off">
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
                        <Button style={{ marginTop: '20px' }} variant="contained" color="primary">
                            Speichern
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}
