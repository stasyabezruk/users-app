import cls from './Card.module.scss'

const Card = ({ children }) => {
    return (
        <div className={`${cls.card} ${cls.xl}`}>{children}</div>
    )
}

export default Card