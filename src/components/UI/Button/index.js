import cls from './Button.module.scss';

function Button({ label, handleClick }) {
    return (
        <button className={cls.button} onClick={handleClick}>
            {label}
        </button>
    );
}

export default Button;
