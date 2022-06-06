import Answer from '../../models/mongo/answer.model.js';

export const deleteByQuestionID = async ({ questionID }) => {
  try {
    const answerList = await Answer.find({ questionID });
    for (const ans of answerList) {
      await ans.remove();
    }
  } catch (e) {
    //console.log('error', e);
  }
};
