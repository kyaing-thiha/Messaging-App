var user2 = {
    _id: 2,
    name: "minion2",
    profilePic: null,
    minionPals: [
        user1
    ]
}

var user3 = {
    _id: 3,
    name: "minion3",
    profilePic: null,
    minionPals: [
        user1
    ]
}

var user1 = {
    _id: 1,
    name: "minion1",
    profilePic: null,
    minionPals: [
        user2,
        user3
    ]
}

module.exports = [user1, user2, user3]