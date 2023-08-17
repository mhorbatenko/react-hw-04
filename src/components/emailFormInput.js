
import { TextField } from "@mui/material";
import { useState } from "react";

import {isEmailPassValidation} from "src/utils/validation";


export default function EmailFormInput() {

    const [isEmailValid, setEmailValid] = useState(false)

    const handleUserEmail = () => {
        console.log('data', event.target.value, 'state', isEmailValid)
        if (isEmailPassValidation(event.target.value)) {
            setEmailValid(true)
            return
        }
        setEmailValid(false)
        return
    }

    return (
        <>
            {
                isEmailValid ?
                <TextField
                    id="outlined-basic"
                    onChange={handleUserEmail}
                    label="Outlined"
                    variant="outlined"
                    helperText='Please type your email'
                /> :
                <TextField
                    error={isEmailValid}
                    id="outlined-basic"
                    onChange={handleUserEmail}
                    label="Outlined"
                    variant="outlined"
                    helperText='Not valid email'
                />
            }
        </>
    )
}
