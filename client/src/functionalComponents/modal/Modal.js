import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import ModalSymbol from './ModalSymbol'
import './modal.css'
import Card from '../card/Card'
import Button from '../button/Button'

const Modal = () => {
    const {
        openModal,
        setOpenModal,
        modalType,
        modalContent,
        setModalContent,
        closeText,
        setCloseText
    } = useContext(AppContext);

    const closeModal = () => {
        setOpenModal(false);
        setModalContent("");
        setCloseText("");
    }

    return (
        <>
            <div
                className={"modalBackground" + (openModal ? "" : " hideModal")}
                onClick={closeModal}
            />
            <div
                className={"modalCardContainer" + (openModal ? "" : " hideModal")}>
                <Card className="modalCard smallCard">
                    <div className="cardSection">
                        <ModalSymbol modalType={modalType}/>
                        {modalContent}
                    </div>
                    <div className="cardSection">
                        <Button className="buttonPrimary" onClick={closeModal}>
                            {closeText && closeText!="" ? closeText : "Got it!"}
                        </Button>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Modal
