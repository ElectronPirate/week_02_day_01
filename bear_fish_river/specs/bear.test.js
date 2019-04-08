const Bear = require('../bear');

let bear;

beforeEach(() =>{
  bear = new Bear ('Yogi');
})
test('Bear should have a name', () => {
  expect(bear.name).toBe('Yogi');
})
test('bear should have an empty belly', () => {
  expect(bear.stomach.length).toBe(0);
})
test('bear should have a roar method', () => {
  expect(bear.roar()).toBe('ROAR!')
})
test('bear should have a food count method', () => {
  expect(bear.foodCount()).toBe(0);
})
test('bear should take fish from the river', () => {
  bear.takeFish();
  expect(bear.foodCount()).toBe(1);
})
