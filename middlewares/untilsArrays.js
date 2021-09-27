

const cleanArrayEmptys = (arr) => arr.reduce((acum, el) => {
    if(el.length > 0){
        acum.push(el);
    }
    return acum;
}, []);

module.exports = {
    cleanArrayEmptys
}