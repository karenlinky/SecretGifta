import { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Text from '../functionalComponents/text/Text'
import { AppContext } from '../AppContext'
import { messages as generalMessages } from '../messages'
import { modalConstants } from '../functionalComponents/modal/modalConstants'
import Header from '../header/Header'
import PageTitle from '../functionalComponents/pageTitle/PageTitle'
import './eventDetailPage.css'
import { display } from '../eventPage/display'
import Chip from '../functionalComponents/chip/Chip'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { checkExpired } from '../loginAndRegister/helper'
import { pageLinkConstants } from '../constants/pageLinkConstants'



const ViewEventPage = ({ match }) => {

    const { setOpenModal, setModalType, setModalContent } = useContext(AppContext);

    const { event_id } = useParams();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [minMax, setMinMax] = useState('');
    const [participants, setParticipants] = useState([]);
    const [giftee, setGiftee] = useState([]);
    const [showGiftee, setShowGiftee] = useState(false);

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("access_token"),
    };

    const navigate = useNavigate();

    const options = {
        method: 'GET',
        headers: headers,
    }

    const fetchEventList = () => {
        fetch(
            `/event?event_id=${event_id}`,
            options
        ).then(async response => {
            const data = await response.json();
            const expired = checkExpired(data);
            if (expired) {
                navigate(pageLinkConstants.LOGOUT);
            } else if (!data.event || data.event.length == 0) {
                navigate(pageLinkConstants.HOME);
            } else {
                const event = data.event[0];
                setName(event.name);
                setDate(display.displayDate(event.date))
                setMinMax(display.displayValueLimit(event.min, event.max))
                setParticipants(event.giftas)
                setGiftee(event.giftee)
            }
        }).catch(err => {
            setOpenModal(true);
            setModalType(modalConstants.ERROR);
            setModalContent(generalMessages.generalTryAgainError);
            navigate(pageLinkConstants.HOME);
        })
    }
    useEffect(() => {
        fetchEventList();
    }, [])

    const toggleShowGiftee = () => {
        setShowGiftee(!showGiftee);
    }

    return (
        <Header>
            <PageTitle>Event</PageTitle>
            <div>
                <div className={"eventDetailSection"}>
                    <div>
                        <Text className={"eventDetailSectionHeader"}>Event Name: </Text><Text>{name}</Text>
                    </div>
                </div>
                <div className={"eventDetailSection"}>
                    <div>
                        <Text className={"eventDetailSectionHeader"}>Gift-exchange Date: </Text><Text>{date}</Text>
                    </div>
                </div>
                <div className={"eventDetailSection"}>
                    <div>
                        <Text className={"eventDetailSectionHeader"}>Gift Value Range: </Text><Text>{minMax}</Text>
                    </div>
                </div>
                <div className={"eventDetailSection"}>
                    <div>
                        <Text className={"eventDetailSectionHeader"}>Participants:</Text>
                    </div>
                    <div>
                        {participants.map((participant) => {
                            return <Chip key={participant.id} id={participant.id} content={participant.username} />
                        })}
                    </div>
                </div>
                <div className={"eventDetailSection"}>
                    <div>
                        <Text className={"eventDetailSectionHeader"}>Your giftee: </Text>
                        <Text className={'toggleShowGifteeButton'} onClick={() => {toggleShowGiftee()}}>{showGiftee ? <><FaChevronUp /></> : <><FaChevronDown /><span>  (Make sure no participants are around you!)</span></>}</Text>
                    </div>
                    {showGiftee && <div>
                        {giftee.map((giftee) => {
                            return <Chip key={giftee.id} id={giftee.id} content={giftee.username} />
                        })}
                    </div>}
                </div>
            </div>
        </Header>
    )
}

export default ViewEventPage
