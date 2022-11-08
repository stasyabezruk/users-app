import { formatDate } from '../../utils/formatDate';

const RepositoryListItem = ({ name, description, language, updated }) => {
    return (
        <div>
            <h4>{name}</h4>
            {description && <p>{description}</p>}
            <p>
                {language && <span>{language}</span>}
                <span>Updated on {formatDate(updated)}</span>
            </p>
        </div>
    );
};

export default RepositoryListItem;
