import { Button } from '@mui/material';
import EmailFormInput from './emailFormInput';
import FirstNameFormInput from './firstNameFormInput';
import LastNameFormInput from './lastNameFormInput';
import PasswordFormInput from './passwordFormInput';

import { isFirstNamePassValidation } from '@/utils/validation';
import {Card, CardContent, Typography} from '@mui/material';
import {Grid} from '@mui/material';
import { useState, useRef } from 'react';

export default function UncontrolledForm () {
    
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


    const firstNameRef = useRef();

    const [validationPassed, setValidationPassed] = useState(false)

    const handleSubmit = () => {

        if(isFirstNamePassValidation(firstNameRef.current.value)) {
            setValidationPassed(true)
            return
        }
        setValidationPassed(false)
    }


    return (
        <>
        <Card>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom>Uncontrolled pattern
                </Typography>
                <form>
                    <div>
                        <label for='fname'>
                            First Name:
                            <input
                                ref={firstNameRef}
                                type='text'
                                label='fname'
                                name='firstName'
                            ></input>
                        </label>
                    </div>
                    <div>
                        <label for='lname'>
                            Last Name:
                            <input
                                type='text'
                                label='lname'
                            ></input>
                        </label>
                    </div>

                    <div>
                        <label for='email'>
                            Email:
                            <input
                                type='email'
                                label='email'
                            ></input>
                            </label>
                    </div>

                    <div>
                        <label for='password'>
                            Password:
                            <input
                                type='password'
                                label='password'
                            ></input>
                        </label>
                    </div>
                </form>
                <Grid item>
                    <Button  variant='contained' onClick={handleSubmit}>Submit</Button>
                </Grid>
                    {
                        validationPassed ?
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom>PASSED
                        </Typography>
                        : null
                    }
            </CardContent>
        </Card>
        </>
    )

}