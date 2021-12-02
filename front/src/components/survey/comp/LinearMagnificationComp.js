import React, { useState, useEffect } from 'react';
import LinearMagnification from '../UI/LinearMagnification';
import Radio from "@mui/material/Radio";
import { FormControlLabel, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { submitAction } from '../../../modules/submitReducer';

const LinearMagnificationComp = ({ ReadOnlyState, ReadOnlyData, setDelIndex,  number, setCheck, UpdateKey, realReadState,  }) => {
    const [minValue, setMinValue] = useState(null);
    const [maxValue, setMaxValue] = useState(null);
    const [temp, setTemp] = useState('');
    const [makeCircles, setMakeCircles] = useState([]);
    const [ changeCircle, setChangeCircle ] = useState(null);
    const dispatch = useDispatch();
    
    let value = [1,2,3,4,5,6,7,8,9];

    const deleteQue = e => setDelIndex(e.target.id);

    useEffect(()=>{
        (!ReadOnlyState||UpdateKey)&&setCheck({[number]:[ `start_Step${number}`, `start_Name${number}_${minValue}`, `end_Step${number}`, `end_Name${number}_${maxValue}`]});
    },[minValue, maxValue, temp])


    const circle = (id, number, size) => {
        return(
            <Grid item xs={1}>
                <FormControlLabel
                
                style={{marginLeft:"0", marginRight:"0"}}
                value="top"
                control={<Radio
                    disabled={realReadState}
                    required={ReadOnlyData.surQue_Essential}
                    onChange={(e)=>setChangeCircle(e.target.value)}
                    value={`radio_${number}_${id}`}
                    name={`radio_${number}`}
                    id={`radio_${number}`}
                    checked={ changeCircle === `radio_${number}_${id}` }
                    sx={{
                        "& .MuiSvgIcon-root": {
                            fontSize: size
                        }
                    }}
                />}
                label={id}
                labelPlacement="top"
            />
            </Grid>
        );
    }

    useEffect(()=>{
        if(ReadOnlyState){
            let newCircle = [];
            const lowNum = Number(ReadOnlyData.selectList[1].surSel_Content);
            const maxNum = Number(ReadOnlyData.selectList[3].surSel_Content);
            for(let i=lowNum; i<=maxNum; i++){
                newCircle.push(circle(i, number, i+20));
            }
            setMakeCircles([...newCircle])
        }
    },[changeCircle])

    useEffect(()=>{
        if(ReadOnlyState)
            dispatch(submitAction({[number]:`radio_${number}`}))
    },[])
    
    return (
        <LinearMagnification 
            realReadState={realReadState}
            number={number}
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            value={value}
            setTemp={setTemp}
            deleteQue={deleteQue}
            ReadOnlyState={ReadOnlyState}
            ReadOnlyData={ReadOnlyData}
            makeCircles={makeCircles}
            UpdateKey={UpdateKey}
        />
    );
};

export default LinearMagnificationComp;