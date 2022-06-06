import Question from '../../models/mongo/question.model.js';

export const deleteById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).send({ message: 'Error id question not found' });
    }
    await question.remove();
    res.send(question);
  } catch (e) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export const create = async (req, res) => {
  const question = new Question(req.body);

  try {
    await question.save();
    res.status(201).send({ question });
  } catch (e) {
    res.status(400).send(e);
  }
};

export const updateById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'content',
    'score',
    'descriptions',
    'questionTypeID',
    'questionGroupID',
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ message: 'Invalid updates!' });
  }

  try {
    const question = await Question.findOne({
      _id: req.params.id,
    });

    if (!question) {
      return res.status(404).send({ message: 'Question id not found!' });
    }

    updates.forEach((update) => (question[update] = req.body[update]));
    await question.save();
    res.send(question);
  } catch (e) {
    res.status(400).send(e);
  }
};
