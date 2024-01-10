import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js"
// initModel => User, Customer, Order,....
const conn = initModels(sequelize);

// Kết nối bên thứ 3 sử dụng async, await
const getUser = async (req, res) => {
    try {
        // SELECT * FROM users
        let data = await conn.users.findAll();
        res.send(data);
    } catch(error) {
        console.log(`Back end error: ${error}`);
    } 
};

const createUser = (req, res) => {
    res.send("Create user");
}

export {
    getUser,
    createUser
}