import axios from 'axios';

// email 중복 확인
export const email = ({user_Email}) => 
    axios.post(`/api/v1/user/checkEmail`, {user_Email});

// 회원가입
export const register = ({user_Email, user_Password, user_Name, user_Tel}) =>
    axios.post(`/api/v1/user/signup`, {user_Email, user_Password, user_Name, user_Tel});
    
// 로그인
export const login = ({user_Email, user_Password}) =>
    axios.post(`/api/v1/user/signin`, {user_Email, user_Password});

// 로그아웃
export const logout = () =>
    axios.post(`/api/v1/user/signout`);

// ID찾기
export const searchID = (searchIDReq) =>
    axios.post(`/api/v1/user/searchID`,searchIDReq);

// PW찾기
export const searchPW = (searchPWReq ) =>
    axios.post(`/api/v1/user/searchPW`,searchPWReq );

// PW변경
export const changePW = (chagePWReq) =>
    axios.put(`/api/v1/user/changePW`,chagePWReq);


// import axios from 'axios';

// // email 중복 확인
// export const email = ({user_Email}) => 
//     axios.post(`${process.env.APIURL}/api/v1/user/checkEmail`, {user_Email});

// // 회원가입
// export const register = ({user_Email, user_Password, user_Name, user_Tel}) =>
//     axios.post(`${process.env.APIURL}/api/v1/user/signup`, {user_Email, user_Password, user_Name, user_Tel});
    
// // 로그인
// export const login = ({user_Email, user_Password}) =>
//     axios.post(`${process.env.APIURL}/api/v1/user/signin`, {user_Email, user_Password});

// // 로그아웃
// export const logout = () =>
//     axios.post(`${process.env.APIURL}/api/v1/user/signout`);

// // ID찾기
// export const searchID = (searchIDReq) =>
//     axios.post(`${process.env.APIURL}/api/v1/user/searchID`,searchIDReq);

// // PW찾기
// export const searchPW = (searchPWReq ) =>
//     axios.post(`${process.env.APIURL}/api/v1/user/searchPW`,searchPWReq );

// // PW변경
// export const changePW = (chagePWReq) =>
//     axios.put(`${process.env.APIURL}/api/v1/user/changePW`,chagePWReq);