export const ExamGroup = (sequelize, DataTypes) => {
   return sequelize.define('ExamGroup', {
      userId: {
         allowNull: false,
         type: DataTypes.STRING,
         unique: true,
      },
      name: {
         allowNull: false,
         type: DataTypes.STRING,
         unique: true,
      },
   }, {
      timestamps:false
   })
}