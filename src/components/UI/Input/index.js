import cls from './Input.module.scss';

function Input({ placeholder, searchTerm, handleChange, ...rest }) {
  return (
    <input
      type="text"
      className={cls.input}
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleChange}
      data-testid="input"
      {...rest}
    />
  );
}

export default Input;
