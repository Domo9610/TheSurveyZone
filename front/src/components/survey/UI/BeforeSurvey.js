import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const BeforeSurvey = ({marks, valuetext, Separator}) => {
    return (
        <>
            <Separator />
            <FormControl component="fieldset">
                <Typography style={{fontWeight:'bold'}}>성별</Typography>
                    <RadioGroup defaultValue="male" sx={{ mx:3 }} row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="male" control={<Radio />} label="남성" />
                        <FormControlLabel value="female" control={<Radio />} label="여성" />
                    </RadioGroup>
            </FormControl>
            <Separator />
            <Separator />
            <Typography style={{fontWeight:'bold'}}>연령대</Typography>
            <Box sx={{ mx:4,  width: 300 }}>
                <Slider
                    track={false}
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={10}
                    max={60}
                />
            </Box>
        </>
    );
};

export default BeforeSurvey;