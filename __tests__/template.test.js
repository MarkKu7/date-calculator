import { weekDay } from './../src/js/date.js';

describe('Date', () => {

  let today;

  beforeEach(() => {
    today = new Date('2021-9-1');
  });

  test('should create a day object', () => {
    expect.anything();
  });

  // test('the date should come in as a string', () => {
  //   expect.stringContaining(today);
  // });

  test('the day object should go from 0 to 6', () => {
    expect(today.getDay()).toBeLessThanOrEqual(6);
  });

  test('the day object should target the specific day of the week corresponding from 0 to 6', () => {
    expect(today.getDay()).toEqual(3);
  });

  test('the weekDay function should return the day of the week as a string based on the getDay value', () => {
    let dayNum = today.getDay();
    let dayString = weekDay(dayNum);
    expect(dayString).toEqual("Wednesday");
  });
});
