import { config } from '@dotenvx/dotenvx';


config({
    path: process.env.NODE_ENV === 'teste' ? ".env.teste" : ".env"
})
