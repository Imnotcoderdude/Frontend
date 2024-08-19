import React, {useEffect, useState} from 'react';
import ContentPage from '../ContentPage/ContentPage';

const BookMarkedWebtoons = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const storedTags = localStorage.getItem('tags');
        const genresArray = storedTags ? storedTags.split('#').filter(tag => tag !== "") : [];

        const generatedGenres = [
            { name: '전체', subGenres: [] },
            { name: '설정 및 테그', subGenres: genresArray }
        ];

        setGenres(generatedGenres);
    }, []);

    return (
        <div className="content-page">
            <ContentPage
                type="/webtoon/bookmark"
                title="웹툰"
                genres={genres}
                tabs={['리디', '카카오페이지', '문피아']}
            />
        </div>
    );
}

export default BookMarkedWebtoons;
