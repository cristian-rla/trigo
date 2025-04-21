import {instanceTrigoService} from "../db/trigo";

export default class trigoController{
    service: typeof instanceTrigoService;
    constructor(service: typeof instanceTrigoService){
        this.service = service;
    }
    calculateTriangleArea(){
        const sides = this.service.getTriangleSides();
        let s = (sides[0] + sides[1] + sides[2]) / 2;

        return Math.sqrt(s*(s-sides[0])*(s-sides[1])*(s-sides[2]));
    }
    calculateRectangleArea(){
        const sides = this.service.getRectangleSides();

        return sides[0]*sides[1];
    }
    calculateCubeVolume(){
        const side = this.service.getCubeSide();
        return Math.pow(side,3);
    }
}
