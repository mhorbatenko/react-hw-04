
import TextField from '@mui/material/TextField';


import { isFirstNamePassValidation } from '@/utils/validation';
import { useState } from 'react';



export default function FirstNameFormInput({userState, validationHandler, isInputValid}) {

    const [firstName, setFirstName] = useState('')

    const handleFirstName = (event) => {

        setFirstName(event.target.value)
        userState.firstName = event.target.value

        return validationHandler(
            isFirstNamePassValidation(event.target.value)
        )
    }

    return (
        <>
        {
        firstName.length === 0 ?
            <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                value={firstName}
                helperText='type your first name'
                onChange={handleFirstName}
                error={false}>
            </TextField>
            :
            <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    helperText={!isInputValid ? 'first name not valid': 'type your first name'}
                    onChange={handleFirstName}
                    error={!isInputValid}>
            </TextField>
        }
        </>
    )
}