import React from 'react';
import cn from 'classnames';
import s from './Card.module.scss';

class Card extends React.Component {

    state = {
        done: false,
    }

    handleCardClick = () => {
        this.setState({
            done: !this.state.done,
        });
    }

    render() {
        const { eng, rus } = this.props;
        const { done } = this.state;

        return (
            <div className={ cn(s.card, { [s.done]: done }) } onClick={this.handleCardClick}>
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
