import { Button } from '@mui/material';

import {
    isFirstNamePassValidation,
    isLastNamePassValidation,
    isEmailPassValidation,
    isPasswordPassValidation
} from '@/utils/validation';
import {Card, CardContent, Typography} from '@mui/material';
import {Grid} from '@mui/material';
import { useState, useRef } from 'react';

export default function UncontrolledForm () {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passworfRef = useRef();

    const [validationPassed, setValidationPassed] = useState(false)

    const handleSubmit = () => {

        if (
            isFirstNamePassValidation(firstNameRef.current.value) &&
            isLastNamePassValidation(lastNameRef.current.value) &&
            isEmailPassValidation(emailRef.current.value) &&
            isPasswordPassValidation(passworfRef.current.value)
        ) {
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
                                ref={lastNameRef}
                                type='text'
                                label='lname'
                            ></input>
                        </label>
                    </div>

                    <div>
                        <label for='email'>
                            Email:
                            <input
                                ref={emailRef}
                                type='email'
                                label='email'
                            ></input>
                            </label>
                    </div>

                    <div>
                        <label for='password'>
                            Password:
                            <input
                                ref={passworfRef}
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
                        :
                        <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom>Not valid input form
                    </Typography>
                    }
            </CardContent>
        </Card>
        </>
    )

}