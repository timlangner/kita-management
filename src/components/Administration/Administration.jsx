import 'date-fns';
import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function Administration() {
    const classes = useStyles();
    const [dense, setDense] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div style={{ margin: '15px' }}>
            <div>
                <Typography variant={'h4'} gutterBottom>
                    Verwaltung
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
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
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container>
                                    <KeyboardDatePicker
                                        disableToolbar
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
                            <TextField id="standard-full-width" label="Erziehungsberechtigte/-r" fullWidth required/>

                            <div style={{ textAlign: 'center'}}>
                                <Button style={{ marginTop: '20px' }} variant="contained" color="primary">
                                    Hinzufügen
                                </Button>
                            </div>
                        </form>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Typography style={{ marginTop: '20px' }} variant={'h6'} gutterBottom>
                    Gruppen
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Giraffen</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12} md={6}>
                            <div className={classes.demo}>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Max Mustermann"
                                                secondary="Aug 4, 2016"
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>,
                                    )}
                                </List>
                            </div>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Mäusen</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form noValidate autoComplete="off">
                            <div style={{ display: 'flex' }}>
                                <TextField style={{ marginRight: '20px' }} id="standard-basic" label="Vorname" />
                                <TextField id="standard-basic" label="Nachname" />
                            </div>
                        </form>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Bären</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form noValidate autoComplete="off">
                            <div style={{ display: 'flex' }}>
                                <TextField style={{ marginRight: '20px' }} id="standard-basic" label="Vorname" />
                                <TextField id="standard-basic" label="Nachname" />
                            </div>
                        </form>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Elefanten</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form noValidate autoComplete="off">
                            <div style={{ display: 'flex' }}>
                                <TextField style={{ marginRight: '20px' }} id="standard-basic" label="Vorname" />
                                <TextField id="standard-basic" label="Nachname" />
                            </div>
                        </form>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
