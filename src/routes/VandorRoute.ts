import express, { Request, Response, NextFunction } from 'express';
import { AddFood, AddOffer, EditOffer, GetFoods, GetOffers, GetOrderDetails, GetOrders, GetVendorProfile, ProcessOrder, UpdateVendorCoverImage, UpdateVendorProfile, UpdateVendorService, VendorLogin } from '../controllers';
import { Authenticate } from '../middleware';
import multer from 'multer';
import fs from 'fs';


const router = express.Router();

const imageStorage = multer.diskStorage({
    destination: function(req,file, cb){

         // Create 'images' directory if it doesn't exist
    const dir = './images';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
        cb(null, 'images')
    },
    filename: function(req,file,cb){
        cb(null, new Date().toISOString()+'_'+file.originalname);
    }
})

const images = multer({ storage: imageStorage}).array('images', 10);


router.post('/login', VendorLogin);

router.use(Authenticate)
router.get('/profile', GetVendorProfile);
router.patch('/profile', UpdateVendorProfile);
router.patch('/coverimage', images,UpdateVendorCoverImage);
router.patch('/service', UpdateVendorService);

router.post('/food',images, AddFood);
router.get('/food', GetFoods)


router.get('/orders', GetOrders);
router.put('/order/:id/process', ProcessOrder);
router.get('/order/:id', GetOrderDetails)
 

//Offers
router.get('/offers', GetOffers);
router.post('/offer', AddOffer);
router.put('/offer/:id', EditOffer)
 


router.get('/', (req: Request, res: Response, next: NextFunction) => {
 
res.json({ message: "Hello from Vandor"})

})



export { router as VandorRoute };