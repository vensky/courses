import React from 'react';
import cn from 'classnames';
import s from './Card.module.scss';

class Card extends React.Component {

    state = {
        done: false,
        isRemembered: false,
    }

    handleCardClick = () => {
        this.setState((state) => {
            return {
                done: (state.isRemembered ? true : !state.done),
            }
        });
    }

    handleIsRemeberClick = () => {
        this.setState({
            done: true,
            isRemembered: true,
        })
    }

    handleDeletedClick = () => {
        this.props.onDeleted(this.props.id);
    }

    render() {
        const { eng, rus } = this.props;
        const { done, isRemembered } = this.state;

        return (
            <div className={s.cardOuter}>
                <div className={ cn(s.card, { [s.done]: done , [s.isRemembered]: isRemembered }) } onClick={this.handleCardClick}>
                    <div className={s.cardInner}>
                        <div className={s.cardFront}>
                            { eng }
                        </div>
                        <div className={s.cardBack}>
                            { rus }
                        </div>
                    </div>
                </div>
                <div className="check"><input type="checkbox" onChange={this.handleIsRemeberClick} checked={isRemembered} /></div>
                <button type="button" onClick={this.handleDeletedClick}>Del</button>
            </div>
        );
    }
}

export default Card;
