import React, { useState } from 'react';
import axiosInstance from "../../api/axiosInstance";

const PaymentApprovePage = () => {
    const [response, setResponse] = useState(null);
    const [pgToken, setPgToken] = useState('');

    const handlePaymentApprove = async () => {
        try {
            const res = await axiosInstance.get(`/payment/approve/6`, {
                params: { pg_token: pgToken },
            });
            setResponse(res.data);
        } catch (error) {
            console.error('결제 승인 요청 실패:', error);
        }
    };

    return (
        <div>
            <h1>결제 승인</h1>
            <input
                type="text"
                value={pgToken}
                onChange={(e) => setPgToken(e.target.value)}
                placeholder="PG Token"
            />
            <button onClick={handlePaymentApprove}>결제 승인 요청</button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
};

export default PaymentApprovePage;
