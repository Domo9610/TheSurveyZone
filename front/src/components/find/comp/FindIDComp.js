import React, { useState } from 'react';
import FindID from '../UI/FindID';
import { createTheme  } from '@mui/material/styles';
import { searchID } from '../../../lib/api/auth';
import ErrorSweet from '../../common/modules/ErrorSweet';
import { useHistory } from 'react-router';

const FindIDComp = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const history = useHistory();
    const theme = createTheme();

    const successID = (findId) => {
        ErrorSweet('info', null, '아이디 찾기', findId, '로그인 창으로 이동합니다.');
        history.push('/LoginPage');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const searchIDReq = ({
            user_Name: data.get('user_Name'),
            user_Tel: data.get('user_Tel'),
        });
        searchID(searchIDReq)
            .then(res=> successID(res.data) )
            .catch(err => { 
                if(err.response.data.errorCode=="404_1") ErrorSweet('error', null, "실패", "일치하는 회원정보가 없습니다", null);
                if(err.response.data.errorCode=="400_3") ErrorSweet('error', null, "유효한값이 아닙니다", "성함과 전화번호를 확인해주세요", null);
            });
    };
    
    const onChange = (e) => {
        let text = e.target.value;
        let maketext = text.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
        setPhoneNumber(maketext);
    }

    return (
        <>
            <FindID 
                handleSubmit={handleSubmit}
                theme={theme}
                onChange={onChange}
                phoneNumber={phoneNumber}
            />   
        </>
    );
};

export default FindIDComp;