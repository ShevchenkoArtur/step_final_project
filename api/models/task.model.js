module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.STRING
        }
    });

    return Task;
};