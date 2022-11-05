import cls from './UserInfo.module.scss';

function UserInfo({ name, avatarURL }) {
    return (
        <div className={cls.userInfo} data-testid="user-info">
            <h3>{name}</h3>
            <div className={cls.avatarWrapper}>
                <img src={avatarURL} alt="github avatar" />
            </div>
        </div>
    );
}

export default UserInfo;
