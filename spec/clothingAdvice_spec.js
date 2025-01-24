import { getClothingSuggestion } from "./functions.js";

describe("Clothing Suggestion Tests", function() {
    it("should suggest light clothes for hot weather", function() {
        let temperature = 30;  // 30°C
        let humidity = 60;     // 60% humidity
        let suggestion = getClothingSuggestion(temperature, humidity);
        expect(suggestion).toBe("Wear light clothes, like shorts.");
    });

    it("should suggest warm clothing for chilly weather", function() {
        let temperature = 5;   // 5°C
        let humidity = 75;     // 75% humidity
        let suggestion = getClothingSuggestion(temperature, humidity);
        expect(suggestion).toBe("Wear a warm jacket.");
    });
});

console.log(suggestion)