import Validator from '../src/js/Validator';

test('test start space', () => {
  const validator = new Validator();
  expect(validator.validateUsername(' anouk-konst')).toBeFalsy();
});

test('test end space', () => {
  const validator = new Validator();
  expect(validator.validateUsername('anouk-konst ')).toBeFalsy();
});

test('test correct username', () => {
  const validator = new Validator();
  expect(validator.validateUsername('anouk konst')).toBeTruthy();
});

test('test with double space', () => {
  const validator = new Validator();
  expect(validator.validateUsername('anouk  konst')).toBeFalsy();
});
test('test with short username', () => {
  const validator = new Validator();
  expect(validator.validateUsername('A')).toBeTruthy();
});
