import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Gongback } from "../Function";

const OTL = ({flag}) => {

    const surText = "아직 작성한 설문이 존재하지않습니다.";
    const surBtnText = "설문생성 하러가기" ;
    const resText = "아직 설문에 응답한 사람이 없습니다.";
    const resBtnText = "내설문 돌아가기" ;
    const surLink="/CreateSurveyPage";
    const resLink="/MySurveyPage";

    return(
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Gongback num={4}/>
                        <div style={{textAlign: "center"}}>
                            <Typography  variant='h5' color="gray">{(flag==="설문")?surText:resText}</Typography>
                        </div>
                    </Grid>

                    <Grid item align="center" xs={12}>
                        <Gongback num={4}/>
                        <Link  to={(flag==="설문")?surLink:resLink} style={{textDecoration:'none', color:'white'}}>
                            <Button variant="outlined" size="medium"><Typography fontSize="20px">{(flag==="설문")?surBtnText:resBtnText}</Typography></Button>
                        </Link>
                    </Grid>
                </Grid>
                
                <Gongback num={8}/>
            </Container>
        </>
    )
}

export default OTL;