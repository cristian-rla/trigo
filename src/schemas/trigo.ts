
export interface Triangle {
    side1:number;
    side2:number;
    side3:number;
}

export interface TriangleResult extends Triangle {
    result:number
}


export interface Rectangle {
    side1:number;
    side2:number;
}

export interface RectangleResult extends Rectangle {
    result:number
}


export interface Cube {
    side1:number;
}

export interface CubeResult extends Cube {
    result:number
}