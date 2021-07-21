import React, {useState} from 'react';
import '../index.css';
const SearchBar = ({onSubmit}) => {
    const [term,setTerm] = useState('')
    const searchTextChanges = (event) =>{
        setTerm(event.target.value)
    }
    const formSubmitted = (event) => {
        event.preventDefault();
        onSubmit(term)
    }
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={formSubmitted}>
                <div className="field">
                    <label>Search for video</label>
                    <input type="text" value={term} onChange={searchTextChanges}></input>
                </div>
            </form>
        </div>
    );

}



export default SearchBar