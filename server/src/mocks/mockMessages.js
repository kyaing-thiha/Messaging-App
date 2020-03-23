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

const messages = [
    message(1,2,"Bello"),
    message(2,1,"Me want banana"),
    message(2,1,"Bananananannana"),
    message(3,2,"This shouldn't be here")
]

module.exports=messages