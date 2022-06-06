import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import UserAnswer from '../../models/mysql/userAnswer.model.js';

const answerSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
    questionID: {
      type: Schema.Types.ObjectId,
      ref: 'question',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

answerSchema.pre('remove', async function (next) {
  const answer = this;

  UserAnswer.deleteByID(answer._id.toString(), (err, result) => {
    if (err) return console.log('err', err);
    // console.log('result', result);
  });

  next();
});

export default mongoose.model('answer', answerSchema);
