import { QueryInterface, QueryTypes, Sequelize } from 'sequelize';

import { faker } from '@faker-js/faker'

module.exports = {
    up: async (queryInterface: QueryInterface, sequelize: Sequelize)=>{
        for (let index = 0; index < 20; index++) {
            await queryInterface.sequelize.query(`INSERT INTO "Products" (name, price, "createdAt", "updatedAt") values (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,{
                replacements:[faker.commerce.productName(), faker.commerce.price(),],
                type: QueryTypes.INSERT
            }) ;
        };
    },
    down: async (queryInterface: QueryInterface, sequelize: Sequelize)=>{
        await queryInterface.sequelize.query(`DELETE FROM "Products";`);
    }    
}