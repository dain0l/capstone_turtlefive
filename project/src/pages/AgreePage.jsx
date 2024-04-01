import React, { useState } from 'react';
import '../style/AgreeForm.css';
import { Link } from 'react-router-dom'; // Link import 추가
import styled from 'styled-components';

function AgreePage() {
    const [agreeAll, setAgreeAll] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [agreePrivacy, setAgreePrivacy] = useState(false);
    const [dateTime, setDateTime] = useState(new Date())

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
    
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };

    

    const handleAgreeAll = () => {
        const newState = !agreeAll;
        setAgreeAll(newState);
        setAgreeTerms(newState);
        setAgreePrivacy(newState);
    };

    const handleAgreeTerms = () => {
        setAgreeTerms(!agreeTerms);
    };

    const handleAgreePrivacy = () => {
        setAgreePrivacy(!agreePrivacy);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 서버로 동의 여부를 전송하는 코드 작성
        console.log('약관 동의 여부:', {
            agreeTerms,
            agreePrivacy
        });
    };

    return (
        <div className="container">
            <h2>docturtle🐢 회원가입 동의</h2>
            <form onSubmit={handleSubmit}>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="agreeAll"
                        checked={agreeAll}
                        onChange={handleAgreeAll}
                    />
                    <label htmlFor="agreeAll">모든 약관에 동의합니다.</label>
                    <div className="agree-container">
                    <p>전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다.
                    선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.
                    이용약관의 동의, 개인정보 수집 및 이용 동의를 포함합니다.  </p>
                    </div>
                   
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={agreeTerms}
                        onChange={handleAgreeTerms}
                    />
                    <label htmlFor="agreeTerms">docturtle 이용약관에 동의합니다.</label>
                    <div className="agree-container">
                    <p>현재시간 : {formatDate(dateTime)} <br/>
                    docturtle 서비스와 관련하여 궁금하신 사항이 있으시면 
                        docturtle 문의사항에 남주시기 바랍니다. <br/>
                        (평일 09:00 ~ 17:00)</p>
                    </div>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="agreePrivacy"
                        checked={agreePrivacy}
                        onChange={handleAgreePrivacy}

                    />
                    <label htmlFor="agreePrivacy">docturtle 개인정보 수집 및 이용에 동의합니다.</label>
                    <div className="agree-container">
                    <p>
                    개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 
                    개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다. <br/>
                    이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는 최소한의 개인정보,
                     즉, 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.
                    </p>
                    </div>
                </div>
                <input
                    type="submit"
                    value="다음"
                    disabled={!agreeTerms || !agreePrivacy}
                />

            </form>
        </div>
    );
}

export default AgreePage;
