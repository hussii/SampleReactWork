import React from "react";
import { getGuid } from "Helpers/helpers";
import useStyles from "./action-button-css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';




const WorkflowSettings = (props) => {
    
    const classes = useStyles();
    return (

        <React.Fragment>
            <div className={classes.actionPanelContainer}>
                <div className={classes.actionPanelHeader}>
                    <div> Workflow Settings </div>
                </div>
                <div className={classes.actionPanelButtonContainer}>
                    <span> Expiry Date</span>
                    <Input
                           type="date"
                           name="date"
                           id="scheduleDate"
                          
                        />
                </div>

            </div>
        </React.Fragment>



    );
}

export default WorkflowSettings;