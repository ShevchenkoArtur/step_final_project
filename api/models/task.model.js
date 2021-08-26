module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        body: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        }
    });

    return Task;
};