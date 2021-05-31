import React from 'react';

import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import ContentBlock from './components/ContentBlock/ContentBlock';
import FooterBlock from './components/FooterBlock/FooterBlock';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Card from './components/Card/Card';

import wordsList from './wordsList';

const App = () => {
    return (
        <>
            <HeaderBlock>
                <Header>
                    Время учить слова онлайн
                </Header>
                <Paragraph>
                    Используйте карточки для запоминания и пополняйте активный словарный запапс.
                </Paragraph>
            </HeaderBlock>
            <ContentBlock>
                {wordsList.map(({ eng, rus }) => <Card eng={eng} rus={rus} />)}
            </ContentBlock>
            {/*<FooterBlock  title="Footer" />*/}
        </>
    )
}

export default App;
