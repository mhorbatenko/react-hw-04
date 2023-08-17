"use client"
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
// import { memo, useState } from 'react';

// import EmailFormInput from './emailFormInput';
import FirstNameFormInput from './firstNameFormInput';
// import LastNameFormInput from './lastNameFormInput';
// import PasswordFormInput from './passwordFormInput';
import {Card, CardContent} from '@mui/material';
import {Grid} from '@mui/material';
import { useState } from 'react';

const Form = () => {

    const [userData, setUserData] = useState(
        {
            'firstName': '',
            'lastName': '',
            'email': '',
            'password': ''
        }
    )

    const [isFirstNameValid, setFirstNameValid] = useState(false)

    const handleUserData = () => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    console.log('state', isFirstNameValid)

    return (
        <Card variant='elevation'>
        <CardContent>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <form>
                <Grid item>
                    <FirstNameFormInput handler={setFirstNameValid} valid={isFirstNameValid}/>
                </Grid>
                <Grid item>
                    <Button variant='contained'>Submit</Button>
                </Grid>
            </form>
            </Grid>
            </CardContent>
        </Card>
    )
}

export default Form;