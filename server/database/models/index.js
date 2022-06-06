import { HOST, USER, PASSWORD, DB } from "../../config/mysql.config.js";
import { Sequelize } from 'sequelize'
import { Test } from './test.model.js'
import { Examination } from './examination.model.js'
import { QuestionTest } from './questionTest.model.js'
import { Section } from './section.model.js'
import {ExamGroup} from './examGroup.model.js'
import {SubExamGroup} from './subExamGroup.model.js'
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  logging:true, // logging sql err, query in console
})
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
const db = {}
db.Sequelize = Sequelize 
db.sequelize = sequelize
db.Test = Test(sequelize, Sequelize)
db.Examination = Examination(sequelize, Sequelize)
db.QuestionTest = QuestionTest(sequelize, Sequelize)
db.Section = Section(sequelize, Sequelize)
db.ExamGroup = ExamGroup(sequelize, Sequelize)
db.SubExamGroup = SubExamGroup(sequelize, Sequelize)

db.ExamGroup.hasMany(db.SubExamGroup, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'ExamGroups_id'
})
db.SubExamGroup.belongsTo(db.ExamGroup,{foreignKey:'ExamGroups_id'})

db.SubExamGroup.hasMany(db.Test, {
  foreignKey: 'subExamGroupId'
})
db.Test.belongsTo(db.SubExamGroup,{foreignKey: 'subExamGroupId'})

db.Test.hasMany(db.Section, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'testId'
})
db.Section.belongsTo(db.Test, {foreignKey: 'testId'})

db.Test.hasMany(db.Examination, {foreignKey: 'testId'})
db.Examination.belongsTo(db.Test, {foreignKey: 'testId'})

db.Section.hasMany(db.QuestionTest, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'sectionId'
})
db.QuestionTest.belongsTo(db.Section, {
  foreignKey: 'sectionId'
})

export default db;