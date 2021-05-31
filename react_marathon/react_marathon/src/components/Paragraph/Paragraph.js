import s from './Paragraph.module.scss';

const Paragraph = ({ children }) => {
    return (
        <p className={s.descr}>{children}</p>
    )
}

export default Paragraph;
