import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Grid, TextField } from '@mui/material';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Radio from "@mui/material/Radio";

const LinearMagnification = ({number, minValue, setMinValue, maxValue, setMaxValue, value, valuetext, controlProps, setTemp}) => {
    return (
        <>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Grid container spacing={2}>
                <Switch id={`SurQue_Essential${number}`} name={`SurQue_Essential${number}`} sx={{ left: '92%' }} defaultChecked color="secondary" />
                    <br/>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name={`SurQue_Content${number}`}
                            id={`SurQue_Content${number}`}
                            label={`선형배율${number}`}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            variant="filled"
                            name={`start_Step${number}`}
                            label="시작"
                            onChange={e=>setTemp(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">시작 값</InputLabel>
                                    <Select
                                        required
                                        labelId={`start_Name${number}_${minValue}`}
                                        id={`start_Name${number}_${minValue}`}
                                        name={`start_Name${number}_${minValue}`}
                                        value={minValue}
                                        label={`start_Name${number}_${minValue}`}
                                        onChange={e => setMinValue(e.target.value)}
                                        >
                                    <MenuItem value="0">0</MenuItem>
                                    <MenuItem value="1">1</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            variant="filled"
                            name={`end_Step${number}`}
                            label="끝"
                            onChange={e=>setTemp(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">끝 값</InputLabel>
                                    <Select
                                        required
                                        labelId={`end_Name${number}_${maxValue}`}
                                        id={`end_Name${number}_${maxValue}`}
                                        name={`end_Name${number}_${maxValue}`}
                                        value={maxValue}
                                        label={`end_Name${number}_${maxValue}`}
                                        onChange={e => setMaxValue(e.target.value)}
                                        >
                                    {value.map((v,i)=>
                                        (minValue==0)?<MenuItem value={v}>{v}</MenuItem>:<MenuItem value={v+1}>{v+1}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ mx:4,  width: 300 }}>
                            <Slider
                                track={false}
                                aria-label="Custom marks"
                                defaultValue={1}
                                getAriaValueText={valuetext}
                                step={1}
                                valueLabelDisplay="auto"
                                marks={
                                    [{
                                        value: minValue,
                                        label: minValue,
                                    },
                                    {
                                        value: maxValue,
                                        label: maxValue,
                                    }]}
                                min={minValue}
                                max={maxValue}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Radio {...controlProps("a")} size="small" />
                        <Radio {...controlProps("b")} />
                        <Radio
                            {...controlProps("c")}
                            sx={{
                            "& .MuiSvgIcon-root": {
                                fontSize: 28
                            }
                            }}
                        />
                        <Radio
                            {...controlProps("d")}
                            sx={{
                            "& .MuiSvgIcon-root": {
                                fontSize: 35
                            }
                            }}
                        />
                        <Radio
                            {...controlProps("e")}
                            sx={{
                            "& .MuiSvgIcon-root": {
                                fontSize: 40
                            }
                            }}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default LinearMagnification;