module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('boards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      title: {
        type: Sequelize.STRING,
      },
      description: Sequelize.TEXT,
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('boards'),
};
