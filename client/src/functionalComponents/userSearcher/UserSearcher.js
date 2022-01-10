import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import { messages as generalMessages } from '../../messages'
import { modalConstants } from '../modal/modalConstants'
import TextBox from '../textBox/TextBox'
import Button from '../button/Button'
import { FaSearch } from 'react-icons/fa'
import SearchUserResult from './SearchUserResult'
import './userSearcher.css'

const UserSearcher = ({ existedUsers, onApply, clickInstruction }) => {

    const [keyword, setKeyword] = useState('');

    const { setOpenModal, setModalType, setModalContent } = useContext(AppContext);

    const [showSearchResult, setShowSearchResult] = useState(false);
    const [rawSearchResult, setRawSearchResult] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [doneSearching, setDoneSearching] = useState(false);

    const filterResult = (searchResult, existedUsers) => {
        let newSearchResult = []
        for (let i = 0; i < searchResult.length; i++) {
            let existed = false;
            for (let j = 0; j < existedUsers.length; j++) {
                if  (searchResult[i].id == existedUsers[j].id) {
                    existed = true;
                    break;
                }
            }
            if (!existed) {
                newSearchResult.push(searchResult[i]);
            }
        }
        return newSearchResult;
    }

    const displaySearchResult = (result) => {
        setDoneSearching(true);
        setRawSearchResult(result);
        setSearchResult(filterResult(result, existedUsers));
    }

    const closeSearchResult = () => {
        setShowSearchResult(false);
        setDoneSearching(false);
        setSearchResult([]);
    }
    
    useEffect(() => {
        let newSearchResult = filterResult(rawSearchResult, existedUsers);
        setSearchResult(newSearchResult);
    }, [existedUsers])

    const searchUser = ({ username, password }) => {
        if (keyword.trim() == '') {
            setShowSearchResult(false);
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
            `/search_user?keyword=${keyword.trim()}&searchSelf=0`,
            options
        ).then(async response => {
            const data = await response.json();
            displaySearchResult(data.users);
        }).catch(err => {
            setOpenModal(true);
            setModalType(modalConstants.ERROR);
            setModalContent(generalMessages.generalTryAgainError);
        })
    }

    useEffect(() => {
        searchUser(keyword)
    }, [keyword])

    return (
        <>
            <div className={"searchBar"}>
                <TextBox
                    className={'searchTextBox'}
                    placeholder={'Search by username...'}
                    onChange={(e) => setKeyword(e.target.value)}/>
                {/* <div
                    className={'searchButton'}
                    onClick={() => {searchUser(keyword)}}>
                    <FaSearch/>
                </div> */}
                {showSearchResult && <SearchUserResult searchResult={searchResult} doneSearching={doneSearching} onApply={onApply} clickInstruction={clickInstruction} closeSearchResult={closeSearchResult} />}
            </div>
        </>
    )
}

export default UserSearcher
