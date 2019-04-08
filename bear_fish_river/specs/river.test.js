const River = require('../river');
const Bear = require('../bear');

let river;
let bear;

beforeEach(() => {
river = new River ("Amazon", ['Bob', 'Alice']);
bear = new Bear ('Yogi');
})

test('check if the river has a name', () => {
  expect(river.name).toBe("Amazon")
})

test('river can have many fish', () => {
  expect(river.fish.length).toBe(2)
})
test('river loses fish when a bear takes a fish', () => {

   bear.takeFish(river.loseFish('Bob'))
   expect(river.fish.length).toBe(1);
   expect(bear.stomach.length).toBe(1);
 })
test('river should have a fish count method', () => {
  expect(river.fishCount()).toBe(2);
})
