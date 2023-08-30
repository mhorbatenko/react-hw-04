import { Button } from '@mui/material';
import EmailFormInput from './emailFormInput';
import FirstNameFormInput from './firstNameFormInput';
import LastNameFormInput from './lastNameFormInput';
import PasswordFormInput from './passwordFormInput';
import {Card, CardContent, Typography} from '@mui/material';
import {Grid} from '@mui/material';
import { useState } from 'react';


export default function ControlledForm () {

    const [userData, setUserData] = useState(
        {
            'firstName': '',
            'lastName': '',
            'email': '',
            'password': ''
        }
    )

    const [isFirstNameValid, setFirstNameValid] = useState(false)
    const [isLastNameValid, setLastnameValid] = useState(false)
    const [isEmailValid, setEmailValid] = useState(false)
    const [isPasswordValid, setPasswordValid] = useState(false)

    const handleUserData = (event) => {
        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const inputsValidationState = [isFirstNameValid, isLastNameValid, isEmailValid, isPasswordValid]


    const isSubmitAllowedCheck = (inputValidationState) => inputValidationState === true;
    const isSubmitAllowed = inputsValidationState.every(isSubmitAllowedCheck)

    return (
        <Card>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Controlled pattern
                    </Typography>
                <Grid item>
                    <FirstNameFormInput validationHandler={setFirstNameValid} isInputValid={isFirstNameValid}/>
                </Grid>
                <Grid item>
                    <LastNameFormInput validationHandler={setLastnameValid} isInputValid={isLastNameValid}/>
                </Grid>
                <Grid item>
                    <EmailFormInput validationHandler={setEmailValid} isInputValid={isEmailValid}/>
                </Grid>
                <Grid item>
                    <PasswordFormInput validationHandler={setPasswordValid} isInputValid={isPasswordValid}/>
                </Grid>
                <Grid item>
                    <Button disabled={!isSubmitAllowed} variant='contained' onClick={handleUserData}>Submit</Button>
                </Grid>
            </CardContent>
        </Card>
    )
}