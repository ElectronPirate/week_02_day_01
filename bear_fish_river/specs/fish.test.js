const Fish = require('../fish');


let fish;

beforeEach(() => {
fish = new Fish ("Bob");
})

test('check if the fish has a name', () => {
  expect(fish.name).toBe("Bob")
})
