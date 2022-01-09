import React from 'react'
import SearchUserResultTab from './SearchUserResultTab'

const SearchUserResult = ({ searchResult, doneSearching, onApply, clickInstruction }) => {
    return (
        <div className="searchResult">
            {searchResult.map(user => 
                {return <SearchUserResultTab key={user.id} id={user.id} username={user.username} pinned={user.pinned} onApply={onApply} clickInstruction={clickInstruction} />}
            )}
        </div>
    )
}

export default SearchUserResult
