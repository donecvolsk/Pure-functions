import { characterHealth } from "../app";

test.each([
    [90, 'healthy'],
    [10, 'critical'],
    [40, 'wounded'],   
])
('testing characterHealth function with %i levelTest ', (levelTest, expected) => {
    const result = characterHealth(levelTest);
    expect(result).toBe(expected);
})
