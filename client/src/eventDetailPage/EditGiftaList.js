import React from 'react'
import Chip from '../functionalComponents/chip/Chip'

const EditGiftaList = ({ removeUser, userList }) => {
    return (
        <div className={'className={"giftaList"}'}>
            {userList.map((user) => {
                return <Chip key={user.id} id={user.id} content={user.username} onRemove={removeUser} />
            })}
        </div>
    )
}

export default EditGiftaList
