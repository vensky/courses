import s from './ContentBlock.module.scss';

const ContentBlock = ({ children }) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                {children}
            </div>
        </div>
    )
}

export default ContentBlock;
