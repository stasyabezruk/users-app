import cls from './Card.module.scss';

function Card({ children, className }) {
    return <div className={`${cls.card} ${cls.xl} ${className ? className : ''}`}>{children}</div>;
}

export default Card;
