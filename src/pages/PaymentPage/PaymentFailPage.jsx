import React, { useState } from 'react';
import axiosInstance from "../../api/axiosInstance";

const PaymentFailPage = () => {
    const [response, setResponse] = useState(null);
    const [tid, setTid] = useState('');

    const handlePaymentFail = async () => {
        try {
            const res = await axiosInstance.post('/payment/fail', { tid });
            setResponse(res.data);
        } catch (error) {
            console.error('결제 실패 요청 실패:', error);
        }
    };

    return (
        <div>
            <h1>결제 실패</h1>
            <input
                type="text"
                value={tid}
                onChange={(e) => setTid(e.target.value)}
                placeholder="TID"
            />
            <button onClick={handlePaymentFail}>결제 실패 요청</button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
};

export default PaymentFailPage;
