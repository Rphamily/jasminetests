
function hello(){
    return "hello";
}


export {hello};

function meterstoyards(meters) {

    // Convert meters to yards

    return meters * 1.0936; // Return as a number

}

export {meterstoyards};

function getClothingSuggestion(temperature, humidity) {
    let suggestion;

    if (temperature >= 30) {
        suggestion = "Wear light clothes, like shorts.";
    } else if (temperature >= 20 && temperature < 30) {
        suggestion = "A t-shirt and jeans are good.";
    } else if (temperature >= 10 && temperature < 20) {
        suggestion = "Wear a light jacket.";
    } else if (temperature >= 0 && temperature < 10) {
        suggestion = "Wear a warm jacket.";
    } else {
        suggestion = "Wear heavy winter clothing.";
    }

    return suggestion;
}

export{getClothingSuggestion};

function calculateCubeVolume(edgeLengthInMeters) {
    let volume = Math.pow(edgeLengthInMeters, 3);  // Calculate volume by cubing the edge length
    return volume;
}

export { calculateCubeVolume };