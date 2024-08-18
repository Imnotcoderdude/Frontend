import React, { useState } from 'react';
import axiosInstance from "../../api/axiosInstance";

const PaymentReadyPage = () => {
    const [response, setResponse] = useState(null);

    const handlePaymentReady = async () => {
        try {
            const res = await axiosInstance.post('/payment/ready', {
                price: 100,
                itemName: 'Book'
            });
            setResponse(res.data);
        } catch (error) {
            console.error('결제 준비 요청 실패:', error);
        }
    };

    return (
        <div>
            <h1>결제 준비</h1>
            <button onClick={handlePaymentReady}>결제 준비 요청</button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
};

export default PaymentReadyPage;
