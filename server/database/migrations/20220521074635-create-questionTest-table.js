'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("questionTests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sectionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Sections",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      questionID: {
        allowNull: false,
        type: Sequelize.STRING(24),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("questionTests");
  }
};
