import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { userPageUrl } from '../../constants/url';
import './style.scss';

function SearchPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    navigate(`${userPageUrl}/${searchTerm}`);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <div className="search-form flexCenter">
        <Input
          placeholder="Enter user name"
          searchTerm={searchTerm}
          handleChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button label="Search" handleClick={handleSearch} />
      </div>
    </div>
  );
}

export default SearchPage;
