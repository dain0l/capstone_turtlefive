import React from 'react';
import { useNavigate } from 'react-router-dom';


function PleaseLogin() {
    const navigate = useNavigate('');

    alert("만료되어있습니다. 다시 재로그인하세요.")
    navigate('/login')

  return (
    <>
    </>
  );
}

export default PleaseLogin;