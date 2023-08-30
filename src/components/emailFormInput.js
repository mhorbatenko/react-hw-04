
import { TextField } from "@mui/material";
import { useState } from "react";

import {isEmailPassValidation} from "src/utils/validation";


export default function EmailFormInput({userState, validationHandler, isInputValid}) {

    const [email, setEmail] = useState('')

    const handleUserEmail = (event) => {
        setEmail(event.target.value)
        userState.email = event.target.value
        return validationHandler(
            isEmailPassValidation(event.target.value)
        )
    }

    return (
        <>
        {
        email.length === 0 ?
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                helperText='type your email'
                onChange={handleUserEmail}
                error={false}>
            </TextField>
            :
            <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    helperText={!isInputValid ? 'email not valid': 'type your email'}
                    onChange={handleUserEmail}
                    error={!isInputValid}>
            </TextField>
        }
        </>
    )
}
