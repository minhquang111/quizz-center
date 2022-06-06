import sql from './db.js';

class UserAnswer {
  constructor(userID, answerID) {
    this.userID = userID;
    this.answerID = answerID;
  }

  static deleteByID(answerID, result) {
    sql.query(
      'DELETE FROM userAnswer WHERE answerID = ?',
      answerID,
      (err, res) => {
        if (err) {
          result(err, null);
          return;
        }

        result(null, res);
      }
    );
  }
}

export default UserAnswer;
