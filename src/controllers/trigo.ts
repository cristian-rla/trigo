/*
Realizado por Cristian Luque.
Project Manager: Carolina de Jesus (no le funcionaba el mouse)
*/

import {instanceTrigoService} from "../db/trigo";
import { TriangleResult, RectangleResult, CubeResult } from "../schemas/trigo";

export default class trigoController{
    service: typeof instanceTrigoService;
    constructor(service: typeof instanceTrigoService){
        this.service = service;
    }
    calculateTriangleArea():TriangleResult{
        const triangle = this.service.getTriangleSides();
        let s = (triangle.side1 + triangle.side2 + triangle.side3) / 2;

        return { 
            ...triangle, 
            result: Math.sqrt(s*(s-triangle.side1)*(s-triangle.side2)*(s-triangle.side3))
        };
    }
    calculateRectangleArea():RectangleResult{
        const rectangle = this.service.getRectangleSides();

        return {
            ...rectangle, 
            result:rectangle.side1*rectangle.side2
        };
            
    }
    calculateCubeVolume():CubeResult{
        const cube = this.service.getCubeSide();
        return {
            ...cube, 
            result:Math.pow(cube.side1,3)
        };
    }
}
