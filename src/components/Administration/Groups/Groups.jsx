import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import { useStyles } from "../../../utils/useStyles";
import AddChild from "../AddChild/AddChild";

function generate(element) {
    return [0, 1, 2, 3].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const groups = ['Bären', 'Elefanten', 'Giraffen', 'Mäuse'];

export default function Groups() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {groups.map(group => {
                return (
                    <Accordion
                        expanded={expanded === group}
                        onChange={handleChangeAccordion(group)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{group}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid item xs={12} md={6}>
                                <div>
                                    <AddChild />
                                    <List>
                                        {generate(
                                            <ListItem>
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
                );
            })}
        </div>
    )
}
