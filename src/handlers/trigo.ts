import {Request, Response, NextFunction} from 'express'
import TrigoController from '../controllers/trigo';
import { instanceTrigoService } from '../db/trigo';

const controller = new TrigoController(instanceTrigoService);

class trigoHttpHandler{
    async getTriangle(req:Request, res:Response, next:NextFunction){
        try{
            const result = controller.calculateTriangleArea();
            res.status(200).json(result);
        } catch(error){
            res.status(500).json({message:""});
        }
    }
    async getRectangle(req:Request, res:Response, next:NextFunction){
        try{
            const result = controller.calculateRectangleArea();
            res.status(200).json(result);

        } catch(error){
            res.status(500).json({message:""});
        }
    }
    async getCube(req:Request, res:Response, next:NextFunction){
        try{
            const result = controller.calculateCubeVolume();
            res.status(200).json(result);

        } catch(error){
            res.status(500).json({message:""});
        }
    }
}

export default new trigoHttpHandler();