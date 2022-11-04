import cls from './UserInfo.module.scss'

const UserInfo = ({
    name,
    avatarURL
}) => {
    return (
        <div className={cls.userInfo}>
            <h3>{name}</h3>
            <div className={cls.avatarWrapper}>
                <img src={avatarURL} alt="github avatar" />
            </div>

        </div>
    )
}

export default UserInfo