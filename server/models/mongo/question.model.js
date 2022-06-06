import mongoose from 'mongoose'
const Schema = mongoose.Schema

import * as Answer from '../../controllers/mongo/answer.controller.js'
import QuestionTest from '../mysql/questionTest.model.js'

const questionSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
    },
    descriptions: {
      type: String,
    },
    questionTypeID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'questionType',
    },
    sectionId: {
      type: Number,
    },
    correctAns: {
      type: Schema.Types.Mixed,
    },
    answers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'answer',
      },
    ],
    questionGroupID: {
      type: Number,
      required: true,
    },
    is_answer_shuffled: {
      type: Boolean,
    },
    is_file_required: {
      type: Boolean,
    },

    has_muti_ans: {
      type: Boolean,
    },
    scoring_type: {
      type: String,
      enum: ['self', 'auto'],
      default: 'auto',
    },
    note_ques: {
      type: String,
    },
    test_case: {
      type: [Object],
    },
    sql_input: {
      type: String,
      default: 'insert into ....',
    },
    time_limit: {
      //miliseconds
      type: Number,
    },
    calculate_matching_score: {
      type: String,
      enum: ['each', 'all'],
    },
    expected_sql_input: {
      type: [String],
    },
    sql_config: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
)

questionSchema.pre('remove', async function (next) {
  const question = this

  await Answer.deleteByQuestionID({ questionID: question._id })
  QuestionTest.deleteManyByID(question._id.toString(), (err, result) => {
    if (err) return console.log('err', err)
    // console.log('result', result);
  })
  next()
})

export default mongoose.model('question', questionSchema)
