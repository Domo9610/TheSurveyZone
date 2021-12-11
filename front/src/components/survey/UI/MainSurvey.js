import AddIcon from '@mui/icons-material/Add';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button, Grid, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { Img } from '../../common/Function';
import ReqSwitch from '../../common/modules/ReqSwitch';
import LinearMagnificationComp from '../comp/LinearMagnificationComp';
import MultipleChoiceComp from '../comp/MultipleChoiceComp';
import SubjectiveComp from '../comp/SubjectiveComp';

const MainSurvey = ({ 
    surveyReqForm, 
    UpdateKey, 
    day, 
    setDay, 
    tag, 
    setTag, 
    tags, 
    handleClick, 
    anchorEl,
    open,
    handleClose,
    question,
    ReadOnlyState,
    setUrl,
    setSur_Publish, updateDataTitle , setUpdateDataTitle, updateDataContent , setUpdateDataContent}) => {

    const defaultImage = "https://surveyzone.s3.ap-northeast-2.amazonaws.com/static/b5e552ea-8d6b-4582-89ae-1d25c25027b8no-image.png";
    useEffect(()=>{
          if(surveyReqForm!=null){
              setUpdateDataTitle(surveyReqForm.sur_Title)
              setUpdateDataContent(surveyReqForm.sur_Content)
          }
    },[surveyReqForm])

    return (
        <>
            {surveyReqForm &&
                <Container component="main" maxWidth="md" sx={{ mb: 4 }} >
                    <Paper levation={2} sx={{ bgcolor: UpdateKey?"#F2EFFB":"#F5F5DC", my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        {UpdateKey ?
                            <>
                                <ReqSwitch essential={surveyReqForm.sur_Publish} setSur_Publish={setSur_Publish}/>
                                <Grid item xs={12} >
                                    <TextField
                                        sx={{ my: 1 }}
                                        InputProps={{ readOnly: (!UpdateKey) }}
                                        fullWidth
                                        id="Sur_Title"
                                        name="Sur_Title"
                                        label="제목"
                                        placeholder="제목을 입력해주세요. (45자 이내)"
                                        inputProps={{ maxLength: 45 }}
                                        value={updateDataTitle}
                                        onChange={e => setUpdateDataTitle(e.target.value)}
                                    />
                                </Grid>
                            </>
                            :
                            <>
                            <Typography color="textSecondary">{surveyReqForm.sur_Publish?"공개설문":"비공개설문"}</Typography>
                            <Grid item xs={12} >
                                <Typography style={{wordWrap:"break-word" }} component="h1" variant="h4" align="center">
                                    {surveyReqForm.sur_Title}
                                </Typography>
                                <Typography color="gray" component="h6" variant="h6" align="center">
                                    {updateDataContent}
                                </Typography>
                            </Grid>
                            </>
                        }
                        <hr />
                        <Grid container xs={{ mx: "auto" }}>
                            {UpdateKey ?
                                <>
                                    <Grid my="2" >
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DateRangePicker
                                                            minDate={new Date()}
                                                            startText="시작일"
                                                            endText="마감일"
                                                            value={day}
                                                            onChange={(newValue) => {
                                                                setDay(newValue);
                                                            }}
                                                            renderInput={(startProps, endProps) => (
                                                                <React.Fragment>
                                                                    <TextField {...startProps} sx={{ pr: 1 }} />
                                                                    <TextField {...endProps} />
                                                                </React.Fragment>
                                                            )}
                                                        />
                                        </LocalizationProvider>
                                                            
                                        </Grid>
                                        <Grid sx={{ ml: "auto", my: 1 }}>
                                        <FormControl>
                                                        <InputLabel id="demo-simple-select-label">태그</InputLabel>
                                                        {tags && <NativeSelect
                                                            labelId="sur_Tag"
                                                            id="sur_Tag"
                                                            name="sur_Tag"
                                                            value={tag}
                                                            defaultValue={surveyReqForm.tagList.length === 0 ? "" : surveyReqForm.tagList[0].tag_ID}
                                                            label="sur_Tag"
                                                            onChange={e => setTag(e.target.value)}
                                                        >
                                                            <option value=""></option>
                                                            {tags.map(v => <option value={v.tag_ID}>{v.tag_Name}</option>)}
                                                        </NativeSelect>}
                                                    </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                InputProps={{ readOnly: (!UpdateKey) }}
                                                sx={{ mx: "auto", my: 1 }}
                                                multiline
                                                placeholder="본문을 입력해주세요. (300자 이내)"
                                                fullWidth
                                                rows={2}
                                                rowsmax={8}
                                                inputProps={{ maxLength: 300 }}
                                                id="Sur_Content"
                                                name="Sur_Content"
                                                label="본문"
                                                value={updateDataContent}
                                                onChange={e => setUpdateDataContent(e.target.value)}
                                            />
                                        </Grid>
                                </>
                                :
                                <>
                                    <Grid item xs={6}>
                                        <Typography color="green">
                                            응답기간 : {surveyReqForm.sur_StartDate} ~ {surveyReqForm.sur_EndDate}  ({surveyReqForm.sur_State === 0 ? "진행전" : (surveyReqForm.sur_State === 1 ? "진행중" : "마감")})
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align="right">
                                            태그 [ {(surveyReqForm.tagList.length !== 0) ? surveyReqForm.tagList[0].tag_Name : "X"} ]
                                        </Typography>
                                    </Grid>
                                </>
                            }

                            

                            {surveyReqForm.sur_Image != defaultImage &&
                                <Grid xs={12}>
                                    <Container sx={{ py: 1, my: 1 }} align="center">
                                        <Img setUrl={setUrl} showBtn={UpdateKey}
                                            style=
                                            {{
                                                mx: "auto", my: "auto", maxWidth: "100%",
                                                height: "auto", objectFit: "cover"
                                            }} 
                                            imageSRC={surveyReqForm.sur_Image}
                                            />
                                    </Container>
                                </Grid>
                            }
                        </Grid>
                        <hr />
                        {(!UpdateKey && !ReadOnlyState) &&
                            surveyReqForm.questionList.map((value) => {
                                switch (value.surQue_QType) {
                                    case 0:
                                        return <SubjectiveComp ReadOnlyState={ReadOnlyState} ReadOnlyData={value} setDelIndex={null} number={value.surQue_Order} setCheck={null} UpdateKey={UpdateKey} />
                                    case 1:
                                        return <MultipleChoiceComp ReadOnlyState={ReadOnlyState} ReadOnlyData={value} setDelIndex={null} number={value.surQue_Order} setCheck={null} UpdateKey={UpdateKey} />
                                    case 2:
                                        return <LinearMagnificationComp ReadOnlyState={ReadOnlyState} ReadOnlyData={value} setDelIndex={null} number={value.surQue_Order} setCheck={null} UpdateKey={UpdateKey} />
                                    default: break;
                                }
                            })}

                        {question.map((value) => value)}
                        {UpdateKey && <Paper variant="outlined" palette={{ mode: 'dark' }} sx={{ bgcolor: '#FFFFFF', my: { xs: 1, md: 6 }, p: { xs: 1, md: 1 } }}>
                            <Button
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <Fab size="small" color="secondary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem id='객관식' onClick={e => handleClose(e)}>객관식</MenuItem>
                                <MenuItem id='주관식' onClick={e => handleClose(e)}>주관식</MenuItem>
                                <MenuItem id='선형배율' onClick={e => handleClose(e)}>선형배율</MenuItem>
                            </Menu>
                        </Paper>}
                    </Paper>
                </Container>
            }
        </>
    );
};

export default MainSurvey;