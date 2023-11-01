import express, { Request, Response, NextFunction } from 'express';
import FoodRouter from './src/routes/FoodRoute';
import UserAuthenticationRoute from './src/routes/UserAuthenticationRoute';
import NavigationRoute from './src/routes/NavigationRoute';
import { ContainerBuilder } from 'node-dependency-injection'
import FoodService from './src/services/FoodService';
import NavigationService from './src/services/NavigationService';
import UserAuthenticationService from './src/services/UserAuthenticationService';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Food } from './src/models/mongoose/Food';
import { Nav } from './src/models/mongoose/Nav';
import RecipeService from './src/services/RecipeService';
import { Recipe } from './src/models/mongoose/Recipe';
import { Login } from './src/models/mongoose/Login';
import { authentication } from './src/middlewares/auth';
import cors from './src/middlewares/cors';
import morgan from 'morgan';
import * as fs from 'fs';
import path from 'path';


declare global {
    var Container: ContainerBuilder;
}

/** Dotenv Configuration .env file */
dotenv.config({ path: 'src/configs/.env' });  // Load environment variables from .env file 

/** Db mongoose Configuration */
mongoose.connect((process.env.DATABASE_URL as string));
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

/** App Configuration */
const app = express();

/** CORS middleware */
app.use(cors());

/** HTTP request logger middleware */
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })// create a write stream (in append mode)
app.use(morgan('combined', { stream: accessLogStream }))

/** Parse the request */
app.use(express.urlencoded({ extended: true }));

/** Takes care of JSON data */
app.use(express.json());

/** Authentication middleware */
app.use(authentication);

/** Routes */
app.use('/api/foods', FoodRouter);
app.use('/api/user', UserAuthenticationRoute);
app.use('/api/navigation', NavigationRoute);
app.get('/', (req: Request, res: Response) => {
    res.send({ 'message': 'ok' });
});

/* Error handler middleware */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });

    return;
});

/** Start Server */
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

/** Register Services */
global.Container = new ContainerBuilder();
global.Container.register('recipeService', RecipeService).addArgument(Recipe);
global.Container.register('foodService', FoodService).addArgument(Food).addArgument(global.Container.get('recipeService'));
global.Container.register('navigationService', NavigationService).addArgument(Nav);
global.Container.register('userAuthenticationService', UserAuthenticationService).addArgument(Login);

