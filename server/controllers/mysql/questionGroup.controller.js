import QuestionGroup from '../../models/mysql/questionGroup.model.js';
import Question from '../../models/mongo/question.model.js';

export const create = (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === '')
    return res.status(404).send({ message: 'Invalid request' });

  const questionGroup = new QuestionGroup(name.trim());

  QuestionGroup.create(questionGroup, (err, result) => {
    if (err)
      return res.status(500).send({
        message: 'Some error occurred while create question group',
      });
    res.status(201).send({ questionGroup: result });
  });
};

export const getAll = (req, res) => {
  const { page, keyword } = req.query;
  QuestionGroup.getAll(page, keyword, async (err, data) => {
    if (err)
      return res.status(500).send({
        message: 'Some error occurred while retrieving question groups.',
      });
    res.send({ ...data });
  });
};

export const updateById = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  if (name === '' || !name || name.trim() === '')
    return res.status(400).send({
      message: 'Name can not be empty!',
    });

  QuestionGroup.updateById(id, name, (err, data) => {
    if (err)
      return res.status(500).send({
        message: 'Error updating question group with id ' + id,
      });
    res.send(data);
  });
};

export const deleteById = (req, res) => {
  const { id } = req.params;
  QuestionGroup.deleteById(id, async (err, data) => {
    if (err)
      return res.status(500).send({
        message: 'Could not delete question group with id ' + id,
      });
    // mongodb
    try {
      await Question.updateMany(
        { questionGroupID: id },
        { $set: { questionGroupID: null } }
      );
    } catch (e) {
      res.status(500).send({ message: 'Error when updating questionGroupID' });
    }
    res.send({ message: 'Question group was deleted successfully!' });
  });
};
