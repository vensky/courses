import React, { Component } from 'react';

/*import HeaderBlock from './components/HeaderBlock/HeaderBlock';*/
import ContentBlock from './components/ContentBlock/ContentBlock';
/*import FooterBlock from './components/FooterBlock/FooterBlock';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';*/
import Card from './components/Card/Card';

import wordsList from './wordsList';

class App extends Component {
    state = {
        wordArr: wordsList,
    }

    handleDeletedItem = (id) => {
        this.setState( ({wordArr}) => {
            const idx = wordArr.findIndex((item) => item.id === id);
            const newArr = [
                ...wordArr.slice(0, idx),
                ...wordArr.slice(idx + 1)
                ];

            return {
                    wordArr: newArr,
                };
        })
    }

    render() {
        const { wordArr } = this.state;

        return (
            <ContentBlock>
                {
                    wordArr.map(({ eng, rus, id }) => (
                        <Card key={id} eng={eng} rus={rus} id={id} onDeleted={ this.handleDeletedItem } />
                    ))
                }
            </ContentBlock>
        )
    }
}

export default App;
