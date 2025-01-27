import { meterstoyards } from "./functions.js";

describe("test meterstoyards", function() {
    it("test 10 m", function() {
        let meters = 10;
        let yards = meterstoyards(meters);
        console.log(meters + " Meters is " + yards + " yards")
        expect(yards.toFixed(2)).toBe("10.94");
    });

    it("test 123 m", function() {
        let meters = 123;
        let yards = meterstoyards(meters);
        console.log(meters + " Meters is " + yards + " yards")
        expect(yards.toFixed(2)).toBe("134.51");
    });
});

