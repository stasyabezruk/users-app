import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

function ErrorContent({ error }) {
    const navigate = useNavigate();

    return (
        <div className="flexCenter flexColumn" role="error">
            <h2>{error}</h2>
            <Button
                label="Home page"
                handleClick={() => {
                    navigate('/');
                }}
            />
        </div>
    );
}

export default ErrorContent;
