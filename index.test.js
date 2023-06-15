const index = require("./index");

test("Take a string and returns it capitalized", () =>{
    expect(index.capitalize("hello")).toBe("Hello");
});

test("Take a string a return it reversed", () =>{
    expect(index.reverseString("hello")).toBe("olleh");
})


//Calculations
test("Take 2 numbers adn return sum", () =>{
    expect(index.calculator.add(2,2)).toBe(4);
})
test("Take 2 numbers adn return sum", () =>{
    expect(index.calculator.subtract(2,2)).toBe(0);
})
test("Take 2 numbers adn return sum", () =>{
    expect(index.calculator.divide(2,2)).toBe(1);
})
test("Take 2 numbers adn return sum", () =>{
    expect(index.calculator.multiply(2,2)).toBe(4);
})


test("Take a string and shifts it by certain amount",() =>{
    expect(index.caesarCipher("hello",1)).toBe("ifmmp");
})