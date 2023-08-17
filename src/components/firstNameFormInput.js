
import TextField from '@mui/material/TextField';


import { isFirstNamePassValidation } from '@/utils/validation';
import { useState } from 'react';



export default function FirstNameFormInput({handler, valid}) {

    const [firstName, setFirstName] = useState('')

    const handleFirstName = (event) => {

        setFirstName(event.target.value)

        if (isFirstNamePassValidation(firstName)) {
            return handler(true)
        }
        return handler(false)
    }

    return (
        <>
        {
        firstName.length === 0 ?
            <TextField
                id="outlined-basic"
                label="firstName"
                variant="outlined"
                helperText='Your first name'
                value={firstName}
                onChange={handleFirstName}
                error={false}>
            </TextField>
            :
            <TextField
                    id="outlined-basic"
                    label="firstName"
                    variant="outlined"
                    helperText='Your first name'
                    value={firstName}
                    onChange={handleFirstName}
                    error={!valid}>
                </TextField>
        }
        </>
    )
}