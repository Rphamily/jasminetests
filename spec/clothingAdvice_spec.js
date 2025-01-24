import { getClothingSuggestion } from "./functions.js";

describe("Clothing Suggestion Tests", function() {
    it("should suggest light clothes for hot weather", function() {
        const temperature = 30;  // 30°C
        const humidity = 60;     // 60% humidity
        const suggestion = getClothingSuggestion(temperature, humidity);
        expect(suggestion).toBe("Wear light clothes, like shorts.");
    });

    it("should suggest warm clothing for chilly weather", function() {
        const temperature = 5;   // 5°C
        const humidity = 75;     // 75% humidity
        const suggestion = getClothingSuggestion(temperature, humidity);
        expect(suggestion).toBe("Wear a warm jacket.");
    });
});

console.log(suggestion)