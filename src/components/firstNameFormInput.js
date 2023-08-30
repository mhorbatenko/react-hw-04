
import TextField from '@mui/material/TextField';


import { isFirstNamePassValidation } from '@/utils/validation';
import { useState, useRef } from 'react';



export default function FirstNameFormInput({validationHandler, isInputValid}) {

    const [firstName, setFirstName] = useState('')

    const handleFirstName = (event) => {

        setFirstName(event.target.value)

        return validationHandler(
            isFirstNamePassValidation(event.target.value)
        )
    }

    const nameFieldRef = useRef();

    console.log(nameFieldRef)
    return (
        <>
        {
        firstName.length === 0 ?
            <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                helperText='type your first name'
                onChange={handleFirstName}
                error={false}>
                ref={nameFieldRef}
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