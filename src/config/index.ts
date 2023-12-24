// export const MONGO_URI = 'mongodb://localhost:27017/online_food_delivery';

require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
export const MONGO_URI = process.env.MONGO_URI;

export const APP_SECRET = '238745623hsdf'

export const PORT = process.env.PORT || 8000;
