import cls from './Button.module.scss'

const Button = ({
    label,
    handleCLick
}) => {
    return (
        <button className={cls.button} onClick={handleCLick}>{label}</button>
    )
}

export default Button;