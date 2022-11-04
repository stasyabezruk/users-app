import cls from './Input.module.scss'
const Input = ({
    placeholder,
    searchTerm,
    handleChange
}) => {
    return (
        <input
            type="text"
            className={cls.input}
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleChange}
        />
    )
}

export default Input