const getSquareArea = (base) =>{
    const squareArea= base*base;
    return squareArea
};

const getSquareTriangle = (base, height) =>{
    const triangleArea= ((base*height)/2);
    return triangleArea
};

export default {getSquareArea:getSquareArea, getSquareTriangle:getSquareTriangle}