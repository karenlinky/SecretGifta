import { useState, useEffect } from 'react'
import TextBox from '../textBox/TextBox'
import Button from '../button/Button'
import { FaSearch } from 'react-icons/fa'
import SearchUserResult from './SearchUserResult'
import './userSearcher.css'

const UserSearcher = ({ onApply, clickInstruction }) => {

    const [keyword, setKeyword] = useState('')

    const [showSearchResult, setShowSearchResult] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [doneSearching, setDoneSearching] = useState(false);

    const displaySearchResult = (result) => {
        setDoneSearching(true);
        setSearchResult(result);
    }



    const searchUser = (username) => {
        console.log(username)
        if (username == '') {
            return;
        }

        setShowSearchResult(true);
        // fetch
        displaySearchResult([
            {
                id: 2,
                pinned: true,
                username: 'testUser2',
            },
            {
                id: 3,
                pinned: true,
                username: 'testUser3',
            },
            {
                id: 4,
                pinned: true,
                username: 'testUser4',
            },
            {
                id: 5,
                pinned: false,
                username: 'testUser5',
            },
            {
                id: 6,
                pinned: false,
                username: 'testUser6',
            },
            {
                id: 7,
                pinned: false,
                username: 'testUser7',
            },
            {
                id: 8,
                pinned: false,
                username: 'testUser8',
            },
        ])



        // trim
        // show invisible overlay
        // show 10 search results
        //      close when click on overlay
    }

    return (
        <>
            <div className={"searchBar"}>
                <TextBox
                    className={'searchTextBox'}
                    placeholder={'Search by username...'}
                    onChange={(e) => setKeyword(e.target.value)}/>
                <div
                    className={'searchButton'}
                    onClick={() => {searchUser(keyword)}}>
                    <FaSearch/>
                </div>
                {showSearchResult && <SearchUserResult searchResult={searchResult} doneSearching={doneSearching} onApply={onApply} clickInstruction={clickInstruction} />}
            </div>
        </>
    )
}

export default UserSearcher
