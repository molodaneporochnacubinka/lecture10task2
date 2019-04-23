import Validator from '../src/js/app';

test('test start space', () => {
  const validator = new Validator();
  expect(validator.validateUsername(' anouk-konst')).toBeFalsy();
});

test('test end space', () => {
  const validator = new Validator();
  expect(validator.validateUsername('anouk-konst ')).toBeFalsy();
});

test('test', () => {
  const validator = new Validator();
  expect(validator.validateUsername('anouk konst')).toBeTruthy();
});
