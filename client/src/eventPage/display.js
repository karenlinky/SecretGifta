export const display = {
    displayDate: (date) => {
        return new Date(date).toDateString()
    },
    displayValueLimit: (min, max) => {
        return "$" + min + " - " + (max ? "$" + max : "unlimited")
    }
}