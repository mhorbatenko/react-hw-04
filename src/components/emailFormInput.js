
import { TextField } from "@mui/material";
import { useState } from "react";

import {isUserEmailValid} from "src/utils/validation";

const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

export default function EmailFormInput() {

    const [isEmailValid, setEmailValid] = useState(false)

    const handleUserEmail = () => {
        console.log('data', event.target.value, 'state', isEmailValid)
        // console.log('data', event.target.value)
        if (isUserEmailValid(event.target.value)) {
            setEmailValid(true)
            return
        }
        setEmailValid(false)
        return
    }

    return (
            <TextField
                error={!isEmailValid}
                id="outlined-basic"
                onChange={handleUserEmail}
                label="Outlined"
                variant="outlined"
                helperText='Not valid email'
            />
    )
}
