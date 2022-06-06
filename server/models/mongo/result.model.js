import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const resultSchema = new Schema({
   name: {
      type: String
   },
   finishPercent: {
      type: Number
   },
   score: {
      type: Number
   },
   startAt: {
      type: Date,
   },
   endAt: {
      type: Date,
      required: true,
   },
   duration: {
      type: Date
   },
   result: {
      type: Boolean,
      required: true
   },
   examId: {
      type: Number
   }
})

export default mongoose.model('result', resultSchema, 'result');

