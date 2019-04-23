// TODO: write code here

console.log('app.js bundled');

export default class Validator {
  validateUsername(userName) {
    return userName.search(/^[a-z-][^ ]+[a-z- ?]+[a-z-][^ ]$/) !== -1;
  }
}
