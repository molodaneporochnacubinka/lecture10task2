export default class Validator {
  validateUsername(userName) {
    return (userName.search(/[  ]{2,}/g) === -1 && userName.search(/^[^ ]/g) !== -1 && userName.search(/[a-zA-Z- ]*[^ ]$/g) !== -1);
  }
}
