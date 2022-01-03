import { useState } from 'react'

const useModal = () => {
    const [openModal, setOpenModal] = useState(false);

    const [modalContent, setModalContent] = useState("");

    const [closeText, setCloseText] = useState("");

    return {
        openModal,
        setOpenModal,
        modalContent,
        setModalContent,
        closeText,
        setCloseText,
    }
}

export default useModal
