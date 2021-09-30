const Base = require('./BaseSerializer');

class ErrorSerializer extends Base {
  constructor(status, err) {
    super(status, null, err);
  }
}
module.exports = ErrorSerializer;
