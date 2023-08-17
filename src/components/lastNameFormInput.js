import { TextField } from "@mui/material"

import { isLastNamePassValidation } from "@/utils/validation"
import { useState } from "react"

export  default function LastNameFormInput() {

    const [isLastNameValid, setLastNameValid] = useState(false)

    const handleLastNameValidation = (event) => {
        if (isLastNamePassValidation(event.targer.value)) {
            setLastNameValid(true)
        }
        setLastNameValid(false)
    }

    return (
        <TextField
            onChange={handleLastNameValidation}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            helperText='Your last name'
        />
    )
}
