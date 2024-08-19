import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import styles from './ReportDetailPage.module.css';

const ReportDetailPage = ({ isLoggedIn, isSpecialBoard }) => {
    const { postId } = useParams();
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await axiosInstance.get(`/api/report/${postId}`, {
                    headers: { Authorization: localStorage.getItem('Authorization') }
                });
                setReport(response.data);
            } catch (error) {
                console.error('신고 상세 조회 중 오류 발생:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReport();
    }, [postId]);

    const handleUpdateReport = async () => {
        try {
            await axiosInstance.put(`/api/report/${postId}`, {}, {
                headers: { Authorization: localStorage.getItem('Authorization') }
            });
            alert('신고가 성공적으로 보류되었습니다.');
            navigate('/admin/main')
        } catch (error) {
            console.error('신고 업데이트 중 오류 발생:', error);
            alert('신고 업데이트 중 오류가 발생했습니다.');
        }
    };

    const handleDeleteReport = async () => {
        if (window.confirm('정말로 이 신고를 삭제하시겠습니까?')) {
            try {
                await axiosInstance.delete(`/api/report/${postId}`, {
                    headers: { Authorization: localStorage.getItem('Authorization') }
                });
                alert('신고가 성공적으로 처리되었습니다.');
                navigate('/admin/main')
            } catch (error) {
                console.error('신고 삭제 중 오류 발생:', error);
                alert('신고 삭제 중 오류가 발생했습니다.');
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!report) {
        return <div>신고를 찾을 수 없습니다.</div>;
    }

    return (
        <div className={styles.container}>
            <h2>신고 상세 정보</h2>
            <div className={styles.details}>
                <p><strong>제목:</strong> {report.title}</p>
                <p><strong>내용:</strong> {report.content}</p>
                <p><strong>상태:</strong> {report.reportStatus}</p>
                {report.postId && <p><strong>관련 게시물 ID:</strong> {report.postId}</p>}
                {report.commentId && <p><strong>관련 댓글 ID:</strong> {report.commentId}</p>}
            </div>
            <div className={styles.actions}>
                <button onClick={handleUpdateReport} className={styles.updateBtn}>신고 보류</button>
                <button onClick={handleDeleteReport} className={styles.deleteBtn}>신고 처리 완료</button>
            </div>
        </div>
    );
};

export default ReportDetailPage;
