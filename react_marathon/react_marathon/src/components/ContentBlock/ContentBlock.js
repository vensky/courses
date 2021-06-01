import s from './ContentBlock.module.scss';

const ContentBlock = ({ children }) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <div className={s.cardList}>
                {children}
                </div>
            </div>
        </div>
    )
}

export default ContentBlock;
