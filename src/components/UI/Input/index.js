import cls from './Input.module.scss'
const Input = ({
    placeholder,
    searchTerm,
    handleChange,
    ...rest
}) => {
    return (
        <input
            type="text"
            className={cls.input}
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleChange}
            {...rest}
        />
    )
}

export default Input