import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './NewPostPage.module.css';

const NewPostPage = () => {
    const { boardId } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('Authorization');

        const postData = {
            postType: "NORMAL",
            title,
            body: content,
            contentId: null,
            rating: null
        };

        try {
            const response = await axiosInstance.post(`/api/post`, postData, {
                headers: {
                    Authorization: token,
                }
            });
            if (response.status === 201) {
                navigate(`/community/board/${boardId}`);
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1>새 글 작성</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="content">내용</label>
                    <ReactQuill
                        value={content}
                        onChange={setContent}
                        modules={NewPostPage.modules}
                        formats={NewPostPage.formats}
                        className={styles.quillEditor}
                    />
                </div>
                <div className={styles.formGroup_bottom}>
                    <button type="submit" className={styles.button_post}>글 작성</button>
                    <button
                        type="button"
                        className={`${styles.button_post}`}
                        onClick={() => navigate(`/community/board/${boardId}`)}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPostPage;
