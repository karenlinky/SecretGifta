import React from 'react'
import SearchUserResultTab from './SearchUserResultTab'
import { FaChevronUp } from 'react-icons/fa'

const SearchUserResult = ({ searchResult, doneSearching, onApply, clickInstruction, closeSearchResult }) => {
    return (
        <div className={'searchResult'}>
            {(!searchResult.length || searchResult.length===0) && doneSearching &&
                <div className="noSearchResult">No result found</div>
            }
            {searchResult.map(user => 
                {return <SearchUserResultTab key={user.id} id={user.id} username={user.username} pinned={user.pinned} onApply={onApply} clickInstruction={clickInstruction} />}
            )}
            <div className={'closeSearchResultButton'}><FaChevronUp className={'closeSearchResultIcon'} onClick={() => {closeSearchResult()}}/></div>
        </div>
    )
}

export default SearchUserResult
