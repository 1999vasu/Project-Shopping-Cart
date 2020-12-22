const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('shopdb','shopper','shoppass',{
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        min:0,
        max:5
    }
})

const User = db.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(35),
        allowNull:false,
    }
})

const Product = db.define('products',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(35),
        allowNull:false,
    },
    manufacturer: DataTypes.STRING(50),
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
})

db.sync()
.then(()=> console.log("Database has been synced"))
.catch((err)=> console.error("Error Creating Database"))


exports = module.exports = {
    User,Product
}