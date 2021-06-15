const paddingLeft = (text, length, character) =>{
    if(text.length<length){
        let dif= length-text.length;
        for (let i = 1; i<dif;i++){
            character+=character;
        }
        return `${character}${text}`;
    }else if (text.length===length){
        return text;
    }else{
        return text;
    }
};

export default paddingLeft;