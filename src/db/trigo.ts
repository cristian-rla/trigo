
class trigoService{
    getTriangleSides(){
        let triangleSides;

        do {
          triangleSides = Array.from({ length: 3 }, () => Math.random() * 10);
        } while (
          triangleSides[0] + triangleSides[1] <= triangleSides[2] ||
          triangleSides[0] + triangleSides[2] <= triangleSides[1] ||
          triangleSides[1] + triangleSides[2] <= triangleSides[0]
        );
        
        return triangleSides;
        
    }
    getRectangleSides(){
        return Array.from({length:2}, () => Math.random()*10);
    }
    getCubeSide(){
        return Math.random()*10;
    }
}

const instanceTrigoService = new trigoService();
export {instanceTrigoService};