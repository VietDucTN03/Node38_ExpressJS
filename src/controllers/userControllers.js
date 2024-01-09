const getUser = (req, res) => {
    res.send("Get list users");
};

const createUser = (req, res) => {
    res.send("Create user");
}

export {
    getUser,
    createUser
}