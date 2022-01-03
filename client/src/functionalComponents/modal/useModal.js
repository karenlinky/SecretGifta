import { useState } from 'react'

const useModal = () => {
    const [openModal, setOpenModal] = useState(false);

    const [modalType, setModalType] = useState("");

    const [modalContent, setModalContent] = useState("");

    const [closeText, setCloseText] = useState("");

    return {
        openModal,
        setOpenModal,
        modalType,
        setModalType,
        modalContent,
        setModalContent,
        closeText,
        setCloseText,
    }
}

export default useModal
