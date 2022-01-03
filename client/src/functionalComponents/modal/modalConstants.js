export const modalConstants = {
    WARNING: "Warning",
    ERROR: "Error",
    INFO: "Info",
    SUCCESS: "Success",
}

export const getColor = modalType => {
    const greenColor = "00d640"
    const yellowColor = "ffea00"
    const redColor = "red"
    switch(modalType) {
        case modalConstants.WARNING:
            return yellowColor;
        case modalConstants.ERROR:
            return redColor;
        case modalConstants.INFO:
        case modalConstants.SUCCESS:
        default:
            return greenColor;
    }
}