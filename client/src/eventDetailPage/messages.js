export const messages = {
    eventNameRequired: "Give the event a name.\n50 characters max.",
    eventDateRequired: "Give the event a date.",
    eventMinRequired: "Min is required.",
    eventMinLogic: "Min has to be at least 0.",
    eventMinMaxLogic: "Max cannot be smaller than min.",
    eventParticipantsRequired: (numGiftas, numGifts) => {
        if (!numGifts || numGifts=='' || numGifts < 1) {
            return "You need at least 2 participants."
        } else if (numGifts > numGiftas - 1) {
            return "You need at least " + (numGifts + 1) + " participants for " + numGifts + (numGifts == 1 ? " gift." : " gifts.")
        }
    },
    eventNumberRequired: "Please enter the number of gifts each participants will give out.",
    eventNumberLogic: "The number has to be greater than 0.",
}