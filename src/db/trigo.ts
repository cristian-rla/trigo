/*
Realizado por Cristian Luque.
Project Manager: Carolina de Jesus (no le funcionaba el mouse)
*/
import { Triangle, Rectangle, Cube } from "../schemas/trigo";

class trigoService{
    getTriangleSides():Triangle{
        let triangleSides;

        do {
          triangleSides = Array.from({ length: 3 }, () => Math.random() * 10);
        } while (
          triangleSides[0] + triangleSides[1] <= triangleSides[2] ||
          triangleSides[0] + triangleSides[2] <= triangleSides[1] ||
          triangleSides[1] + triangleSides[2] <= triangleSides[0]
        );
        
        return {
            side1:triangleSides[0],
            side2:triangleSides[1],
            side3:triangleSides[2]
        };
        
    }
    getRectangleSides():Rectangle{
        const rectangleSides =Array.from({length:2}, () => Math.random()*10);
        return {
            side1:rectangleSides[0],
            side2:rectangleSides[1]
        };
    }
    getCubeSide():Cube{
        return {side1:Math.random()*10};
    }
}

const instanceTrigoService = new trigoService();
export {instanceTrigoService};