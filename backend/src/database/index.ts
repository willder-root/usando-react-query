import { Sequelize } from 'sequelize-typescript';
import { Product } from '../model/product';
const databaseConfig = require('../config/database');

const database = new Sequelize(databaseConfig);

const models = [
    Product
]

database.addModels(models)