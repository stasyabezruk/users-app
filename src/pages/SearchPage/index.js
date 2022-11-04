import { useState } from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import './style.scss'

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="search">
            <div className="search-form">
                <Input
                    placeholder="Enter user name"
                    searchTerm={searchTerm}
                    handleChange={handleChange}
                />
                <Button label="Search" />
            </div>
        </div>
    );
}

export default SearchPage;