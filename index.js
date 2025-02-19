function shout(str) {
    return str.toUpperCase()
}

function whisper(str) {
    return str.toLowerCase()
}

function logShout(str) {
    console.log(shout(str))
}

function logWhisper(str) {
    console.log(whisper(str))
}

function sayHiToHeadphonedRoommate(str) {
    switch(str) {
        case str.toLowerCase():
            return "I can't hear you!"
        case str.toUpperCase():
            return "YES INDEED!"
        case "Let\'s have dinner together!":
            return "I would love to!"
    }
}