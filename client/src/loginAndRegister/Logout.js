import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pageLinkConstants } from '../constants/pageLinkConstants';

const Logout = () => {
    localStorage.removeItem("access_token");

    const navigate = useNavigate()

    useEffect(() => {
        navigate(pageLinkConstants.LOGIN);
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Logout
