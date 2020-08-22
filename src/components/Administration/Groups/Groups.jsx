import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import EditIcon from '@material-ui/icons/Edit';
import { useStyles } from "../../../utils/useStyles";
import AddGroup from "./AddGroup";


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function Groups() {
    const classes = useStyles();
    const [dense, setDense] = useState(false);

    return (
        <div>
            <Typography style={{ marginTop: '20px' }} variant={'h6'} gutterBottom>
                Gruppen
            </Typography>
            <AddGroup />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Bären</Typography>
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
                                                <EditIcon />
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
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Giraffen</Typography>
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
                    <Typography className={classes.heading}>Mäuse</Typography>
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
    )
}