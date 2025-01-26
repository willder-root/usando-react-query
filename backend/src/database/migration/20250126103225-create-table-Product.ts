import { QueryInterface, Sequelize } from 'sequelize';
import { AllowNull, DataType } from 'sequelize-typescript';

module.exports = {
    up:(queryInterface : QueryInterface,sequelize: Sequelize)=>{
        return queryInterface.createTable('Products',{
            id:{
                type: DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name:{
                type: DataType.STRING,
                allowNull: false,
            },
            price:{
                type: DataType.DOUBLE,
                allowNull: false,
            },
            createdAt: {
                type: DataType.DATE,
                allowNull: false,
            },
            updatedAt:{
                type: DataType.DATE,
                allowNull: false
            },
            deletedAt:{
                type: DataType.DATE,
                allowNull: true,
            }
        })
    },
    down: (queryInterface:QueryInterface, sequelize: Sequelize) =>{
        return queryInterface.dropTable('Product');
    }
}