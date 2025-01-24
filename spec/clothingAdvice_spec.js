import { getClothingSuggestion } from '../functions.js'

describe("Clothing Suggestion Tests", function() {
    it("should suggest light clothes for hot weather", function() {
        const temperature = 30;  
        const humidity = 60;     
        const suggestion = getClothingSuggestion(temperature, humidity);
        expect(suggestion).toBe("Wear light clothes, like shorts.");
    });

    it("should suggest warm clothing for chilly weather", function() {
        const temperature = 5;   
        const humidity = 75;     
        const suggestion = getClothingSuggestion(temperature, humidity);
        expect(suggestion).toBe("Wear heavy winter clothing.");
    });
});
