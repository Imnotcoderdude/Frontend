import React, {useEffect, useState} from 'react';
import ContentPage from '../../tool/ContentPage/ContentPage';
import ContentTopPage from "../../tool/ContentTopPage/ContentTopPage";

const WebnovelPage = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const storedTags = localStorage.getItem('tags');
        const genresArray = storedTags ? storedTags.split('#').filter(tag => tag !== "") : [];

        const generatedGenres = [
            {name: '전체', subGenres: []},
            {name: '설정 및 테그', subGenres: genresArray}
        ];

        setGenres(generatedGenres);
    }, []);

    return (
        <div className="content-page">
            <ContentTopPage
                type="/type/NOVEL"
                title="웹소설 상위 10"
                tabs={['리디', '카카오페이지', '문피아']}
            />
            <ContentPage
                type="/type/NOVEL"
                title="웹소설"
                genres={genres}
                tabs={['리디', '카카오페이지', '문피아']}
            />
        </div>
    );
}

export default WebnovelPage;
