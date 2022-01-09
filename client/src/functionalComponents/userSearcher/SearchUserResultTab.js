import { useState } from 'react'
import Text from '../text/Text'

const SearchUserResultTab = ({ id, username, pinned, onApply, clickInstruction }) => {

    const [showClickInstruction, setShowClickInstruction] = useState(false);

    const hover = () => {
        setShowClickInstruction(true);
    }

    const notHover = () => {
        setShowClickInstruction(false);
    }

    return (
        <div className={'searchResultTab' + (pinned ? ' pinned' : '')}
            onMouseEnter={() => {hover()}}
            onMouseLeave={() => {notHover()}}
            onClick={() => {onApply(id, username)}}>
            <div className={'searchResultName' + (showClickInstruction ? ' hover' : '')}>
                <Text>{username}</Text>
            </div>
            {clickInstruction &&
                <div className={'searchResultClickInstruction' + (showClickInstruction ? ' hover' : '')}>
                    {clickInstruction}
                </div>
            }
        </div>
    )
}

export default SearchUserResultTab
