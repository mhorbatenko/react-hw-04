"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';


export default function Form() {

    const [submitActive, setSubmitActive] = useState(false)

    const submitHandler = (submitActive) => {
        setSubmitActive(!submitActive)
    }

    return (
        <div style={{display: 'grid', gridTemplateRows: '1fr 1fr 1fr'}}>
            <div id='form' style={{ alignItems: 'center',}}>
                <div style={{ margin: '10px'}}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div style={{ margin: '10px'}}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div style={{ margin: '10px'}}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div style={{ margin: '10px'}}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <Button style={{ margin: '10px'}} variant='contained' disabled={!submitActive}>Submit</Button>
            </div>
            <Button style={{ margin: '10px'}} variant='contained' onClick={() => {submitHandler(submitActive)}}>TEST</Button>
        </div>
    )
}
