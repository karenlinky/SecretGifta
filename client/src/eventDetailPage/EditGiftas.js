import { useState, useEffect } from 'react'
import UserSearcher from '../functionalComponents/userSearcher/UserSearcher'
import { FaPlusCircle } from 'react-icons/fa'
import EditGiftaList from './EditGiftaList'

const EditGiftas = ({ giftas, setFieldValue }) => {

    const [userList, setUserList] = useState(giftas);
    
    useEffect(() => {
        setFieldValue('giftas', userList)
    }, [userList])

    const addUser = (id, username) => {
        var alreadyExisted = false;
        userList.forEach(user => {
            if (user.id == id) {
                alreadyExisted = true;
                return;
            }
        })
        if (!alreadyExisted) {
            setUserList(userList.concat({id: id, username: username}));
        }
    }

    const removeUser = (id) => {
        setUserList(userList.filter(user => user.id != id))
    }

    return (
        <>
            <EditGiftaList removeUser={removeUser} userList={userList} />
            <UserSearcher onApply={addUser} clickInstruction={<FaPlusCircle/>}/>
        </>
    )
}

export default EditGiftas
