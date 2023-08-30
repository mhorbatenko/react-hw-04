import { TextField } from "@mui/material"

import { isPasswordPassValidation } from "@/utils/validation"
import { useState } from "react"


export  default function PasswordFormInput({validationHandler, isInputValid}) {

    const [password, setPassword] = useState('')

    const handlePassword = (event) => {

        setPassword(event.target.value)

        return validationHandler(
            isPasswordPassValidation(event.target.value)
        )
    }

    return (
        <>
        {
        password.length === 0 ?
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                helperText='type your pass'
                onChange={handlePassword}
                error={false}>
            </TextField>
            :
            <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    helperText={!isInputValid ? 'please use another password': 'type your pass'}
                    onChange={handlePassword}
                    error={!isInputValid}>
            </TextField>
        }
        </>
    )
}
