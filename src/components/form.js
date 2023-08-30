"use client"

import {Grid} from '@mui/material';
import ControlledForm from './controlledForm';
import UncontrolledForm from './uncontrolledForm';


const Form = () => {
    return (
        <Grid container>
            <ControlledForm></ControlledForm>
            <UncontrolledForm></UncontrolledForm>
        </Grid>
    )
}

export default Form;