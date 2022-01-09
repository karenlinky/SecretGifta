import { useState, useContext } from 'react'
import { AppContext } from '../../AppContext'
import { messages as generalMessages } from '../../messages'
import { modalConstants } from '../modal/modalConstants'
import TextBox from '../textBox/TextBox'
import Button from '../button/Button'
import { FaSearch } from 'react-icons/fa'
import SearchUserResult from './SearchUserResult'
import './userSearcher.css'

const UserSearcher = ({ onApply, clickInstruction }) => {

    const [keyword, setKeyword] = useState('');

    const { setOpenModal, setModalType, setModalContent } = useContext(AppContext);

    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [doneSearching, setDoneSearching] = useState(false);

    const displaySearchResult = (result) => {
        setDoneSearching(true);
        setSearchResult(result);
    }

    const closeSearchResult = () => {
        setShowSearchResult(false);
        setDoneSearching(false);
        setSearchResult([]);
    }

    const searchUser = ({ username, password }) => {
        if (keyword.trim() == '') {
            return;
        }

        setShowSearchResult(true);

        const headers = {
            "Authorization": "Bearer " + localStorage.getItem("access_token"),
        };

        const options = {
            method: 'GET',
            headers: headers,
        }
        
        fetch(
            `/search_user?keyword=${keyword.trim()}`,
            options
        ).then(async response => {
            const data = await response.json();
            console.log(data)
            displaySearchResult(data.users);
        }).catch(err => {
            setOpenModal(true);
            setModalType(modalConstants.ERROR);
            setModalContent(generalMessages.generalTryAgainError);
        })



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
                {showSearchResult && <SearchUserResult searchResult={searchResult} doneSearching={doneSearching} onApply={onApply} clickInstruction={clickInstruction} closeSearchResult={closeSearchResult} />}
            </div>
        </>
    )
}

export default UserSearcher
