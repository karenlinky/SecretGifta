import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pageLinkConstants } from './constants/pageLinkConstants';

const Redirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(pageLinkConstants.HOME);
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Redirect
