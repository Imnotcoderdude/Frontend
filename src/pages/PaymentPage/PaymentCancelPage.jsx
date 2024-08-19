import React, { useState } from 'react';
import axiosInstance from "../../api/axiosInstance";

const PaymentCancelPage = () => {
    const [response, setResponse] = useState(null);
    const [tid, setTid] = useState('');

    const handlePaymentCancel = async () => {
        try {
            const res = await axiosInstance.post('/payment/cancel', { tid });
            setResponse(res.data);
        } catch (error) {
            console.error('결제 취소 요청 실패:', error);
        }
    };

    return (
        <div>
            <h1>결제 취소</h1>
            <input
                type="text"
                value={tid}
                onChange={(e) => setTid(e.target.value)}
                placeholder="TID"
            />
            <button onClick={handlePaymentCancel}>결제 취소 요청</button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
};

export default PaymentCancelPage;
