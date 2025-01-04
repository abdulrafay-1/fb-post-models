import Users from "../models/users.model.js";

const getAllUsers = async (req, res) => {
    const users = await Users.find({})
    res.json({
        users
    })
}

const addUser = async (req, res) => {
    const { name, age, email } = req.body;

    if (!(name || email || age)) return res.json({
        message: "name, age, email is required"
    })

    const user = await Users.create({ name, age, email })
    res.json({
        message: "User created",
        user,
    })
}

export { addUser, getAllUsers }