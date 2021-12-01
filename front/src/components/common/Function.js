import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


// 함수의 매개변수로 들어온 값을 클립보드에 저장해주는 함수입니다.
const ClipboardCopy = (flag, copyText) =>{
    const doCopy = text => {
        if (!document.queryCommandSupported("copy")) {
            return alert("복사하기가 지원되지 않는 브라우저입니다.");
        }
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.top = 0;
        textarea.style.left = 0;
        textarea.style.position = "fixed";
        document
            .body
            .appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document
            .body
            .removeChild(textarea);
            Swal.fire('URL 복사 성공');
    };
    // flag값이 icon이라면? icon을 반환!! 그외에는 입력된값을 클립보드에 저장!!
    return (flag==="icon"?<ContentCopyIcon onClick={()=>doCopy(copyText)}/>:doCopy(copyText));
}

export const Gongback = ({num}) => {
    let nbsp = [];

        for(var i=0;i<num;i++){
            nbsp.push(i)
        }

    
    return(
        <>
            {nbsp.map(v=><br/>)}
        </>
    )
}


export default ClipboardCopy