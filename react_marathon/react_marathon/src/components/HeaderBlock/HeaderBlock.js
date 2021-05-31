import s from './HeaderBlock.module.scss';

const HeaderBlock = ({ children }) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                {children}
            </div>
        </div>
    )
}

export default HeaderBlock;
