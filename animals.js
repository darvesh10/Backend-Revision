const elephantWeight = 1000;
const lionWeight = 150;
const sumOFWeights = () => {
    return elephantWeight + lionWeight
}
//in this filre we are importing the elephantWeight, sumOFWeights and lionWeight from animals.js file
// to use them in index.js file.
//this concept is called module.exports.
module.exports = {sumOFWeights, elephantWeight, lionWeight};// make sure about syntax