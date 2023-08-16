"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

import EmailFormInput from './emailFormInput';
import FirstNameFormInput from './firstNameFormInput';
import LastNameFormInput from './lastNameFormInput';
import PasswordFormInput from './passwordFormInput';
import {Card, CardContent} from '@mui/material';
import {Grid} from '@mui/material';

export default function Form() {


    const [userData, setuserData] = useState(
        {
            'firstName': '',
            'lastName': '',
            'email': '',
            'password': ''
        }
    )

    const [submitActive, setSubmitActive] = useState(false)

    return (
        <Card variant='elevation'> Some
        <CardContent>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <form>
                <Grid item>
                    <EmailFormInput />
                </Grid>
                <Grid item>
                    <PasswordFormInput />
                </Grid>
                <Grid item>
                    <FirstNameFormInput />
                </Grid>
                <Grid item>
                    <LastNameFormInput />
                </Grid>
                <Grid item>
                    <Button variant='contained' disabled={!submitActive}>Submit</Button>
                </Grid>
            </form>
            </Grid>
            </CardContent>
        </Card>
    )
}
