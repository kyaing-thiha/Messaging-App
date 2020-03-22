var messageId = 0;

const getUniqueMessageId = () => {
    messageId += 1;
    return messageId;
}

const message = (sender, receiver, content) => ({
    _id: getUniqueMessageId(),
    sender,
    receiver,
    content,
    timeStamp: Date.now()
})

export const messages = [
    message(1,2,"Bello"),
    message(2,1,"Me want banana"),
    message(2,1,"Bananananannana")
]

export var user1 = {
    _id: 1,
    name: "minion1",
    profilePic: null,
    minionPals: [
        {
            _id: 2,
            name: "minion2",
            profilePic: null,
        },
        {
            _id: 3,
            name: "minion3",
            profilePic: null,
        }
    ]
}

export var user2 = {
    _id: 2,
    name: "minion2",
    profilePic: null,
    minionPals: [
        {
            _id: 1,
            name: "minion1",
        }
    ]
}