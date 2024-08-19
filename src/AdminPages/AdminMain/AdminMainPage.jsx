import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminMainPage.module.css';
import axiosInstance from '../../api/axiosInstance';
import NewNoticePage from '../AdminNewNoticePage/NewNoticePage';
import PostList from '../../tool/PostList/PostList';

const AdminMainPage = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notices, setNotices] = useState([]);
    const [noticesPage, setNoticesPage] = useState(0);
    const [noticesTotalPages, setNoticesTotalPages] = useState(0);
    const [noticesSize] = useState(4);
    const [sortAscending, setSortAscending] = useState(true);
    const boardId = 3;

    const [reports, setReports] = useState([]);
    const [reportsPage, setReportsPage] = useState(0);
    const [reportsTotalPages, setReportsTotalPages] = useState(0);
    const [reportsSize] = useState(4);
    const [reportSortBy, setReportSortBy] = useState('UNVERIFIED');

    const fetchNotices = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`/api/admin/post/notice/page`, {
                params: {
                    page: noticesPage,
                    size: noticesSize,
                    asc: sortAscending,
                },
                headers: { Authorization: localStorage.getItem('Authorization') },
            });
            const { totalPages, responseDtoList } = response.data;
            setNotices(responseDtoList || []);
            setNoticesTotalPages(totalPages);
        } catch (error) {
            console.error('공지사항 조회 중 오류 발생:', error);
            setNotices([]);
        }
    }, [noticesPage, noticesSize, sortAscending]);

    const fetchReports = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`/api/report`, {
                params: {
                    page: reportsPage,
                    size: reportsSize,
                    sortBy: reportSortBy,
                    asc: sortAscending,
                },
                headers: { Authorization: localStorage.getItem('Authorization') },
            });
            const { totalPages, responseDtoList } = response.data;
            setReports(responseDtoList || []);
            setReportsTotalPages(totalPages);
        } catch (error) {
            console.error('신고 조회 중 오류 발생:', error);
            setReports([]);
        }
    }, [reportsPage, reportsSize, reportSortBy, sortAscending]);



    const handleCrawlingAction = async (endpoint) => {
        try {
            await axiosInstance.post(
                `/api/content${endpoint}`,
                {},
                { headers: { Authorization: `${localStorage.getItem('Authorization')}` } }
            );
            alert('작업이 성공적으로 완료되었습니다.');
        } catch (error) {
            alert('작업 중 오류가 발생했습니다.');
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        fetchNotices();
    };


    useEffect(() => {
        fetchNotices();
    }, [fetchNotices]);


    useEffect(() => {
        fetchReports();
    }, [fetchReports]);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles['crawling-form']}>
                    <h2>크롤링 관리</h2>
                    <div className={styles['crawling-btn-container']}>
                        <button
                            onClick={() => handleCrawlingAction('/start/all')}
                            className={styles['crawling-btn']}
                        >
                            전체 크롤링 시작
                        </button>
                        <button
                            onClick={() => handleCrawlingAction('/start/r')}
                            className={styles['crawling-btn R_crawling']}
                        >
                            리디북스 크롤링 시작
                        </button>
                        <button
                            onClick={() => handleCrawlingAction('/start/m')}
                            className={styles['crawling-btn M_crawling']}
                        >
                            문피아 크롤링 시작
                        </button>
                        <button
                            onClick={() => handleCrawlingAction('/start/k')}
                            className={styles['crawling-btn K_crawling']}
                        >
                            카카오페이지 크롤링 시작
                        </button>
                    </div>
                    <br/>
                    <h2>관리</h2>
                    <div className={styles['management-btn-container']}>
                        <button onClick={() => navigate('/admin/user')} className={styles['management-btn']}>
                            유저 관리
                        </button>
                        <button onClick={() => navigate('/admin/post')} className={styles['management-btn']}>
                            게시글 관리
                        </button>
                        <button onClick={() => navigate('/admin/content')} className={styles['management-btn']}>
                            컨텐츠 관리
                        </button>
                        <button onClick={() => navigate('/admin/hashtag')} className={styles['management-btn']}>
                            태그 관리
                        </button>
                        <button onClick={() => navigate('/admin/other')} className={styles['management-btn']}>
                            기타 관리
                        </button>
                    </div>
                </div>

                <div className={styles['login-form']}>
                    <h2>공지사항 관리</h2>
                    <div className={styles['crawling-btn-container']}>
                        <button onClick={openModal} className={styles['crawling-btn']}>
                            공지 쓰기
                        </button>
                    </div>
                    <div>
                        <h3>
                            <button
                                onClick={() => setSortAscending((prev) => !prev)}
                                className={styles.sort_btn}
                            >
                                {sortAscending ? '공지사항 목록 ▲' : '공지사항 목록 ▼'}
                            </button>
                        </h3>

                        <PostList
                            posts={notices}
                            boardId={boardId}
                            currentPage={noticesPage}
                            totalPages={noticesTotalPages}
                            onPageClick={(newPage) => setNoticesPage(newPage)}
                        />
                    </div>
                </div>

                <div className={styles['login-form']}>
                    <h2>신고 관리</h2>
                    <div>
                        <label htmlFor="report-sort">정렬 기준:</label>
                        <select
                            id="report-sort"
                            value={reportSortBy}
                            onChange={(e) => setReportSortBy(e.target.value)}
                            className={styles.sort_select}
                        >
                            <option value="UNVERIFIED">미확인</option>
                            <option value="VERIFIED">확인</option>
                            <option value="COMPLETED">완료됨</option>
                            <option value="PENDING">보류됨</option>
                        </select>
                    </div>
                    <h3>
                        <button
                            onClick={() => setSortAscending((prev) => !prev)}
                            className={styles.sort_btn}
                        >
                            {sortAscending ? '신고 목록 ▲' : '신고 목록 ▼'}
                        </button>
                    </h3>

                    <PostList
                        posts={reports}
                        boardId={boardId}
                        currentPage={reportsPage}
                        totalPages={reportsTotalPages}
                        onPageClick={(newPage) => setReportsPage(newPage)}
                    />
                </div>

                {isModalOpen && (
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalContent}>
                            <NewNoticePage closeModal={closeModal} />
                        </div>
                    </div>
                )}

            </div>

            <footer className={styles.footer}>
                <p>&copy; 2023 11조 프로젝트. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AdminMainPage;
