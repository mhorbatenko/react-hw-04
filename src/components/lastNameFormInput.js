import { TextField } from "@mui/material"

import { isLastNamePassValidation } from "@/utils/validation"
import { useState } from "react"


export  default function LastNameFormInput({validationHandler, isInputValid}) {

    const [lastName, setLastName] = useState('')

    const handleLastName = (event) => {

        setLastName(event.target.value)

        return validationHandler(
            isLastNamePassValidation(event.target.value)
        )
    }

    return (
        <>
        {
        lastName.length === 0 ?
            <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                helperText='type your last name'
                value={lastName}
                onChange={handleLastName}
                error={false}>
            </TextField>
            :
            <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    helperText={!isInputValid ? 'last name not valid': 'type your last name'}
                    value={lastName}
                    onChange={handleLastName}
                    error={!isInputValid}>
            </TextField>
        }
        </>
    )
}
