// tổng hợp tất cả các routes của các routes khác: videoRoutes, userRoutes, ...

import express from 'express';
import videoRoutes from './videoRoutes.js';
import userRoutes from './userRoutes.js';
import productRoutes from './productRoutes.js';
import restaurantRoutes from './restaurantRoutes.js';

const rootRoutes = express.Router();

rootRoutes.use("/video", videoRoutes);
rootRoutes.use("/user", userRoutes);
rootRoutes.use("/product", productRoutes);
rootRoutes.use("/restaurant", restaurantRoutes);

export default rootRoutes;
