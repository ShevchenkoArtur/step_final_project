module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        body: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        inBin: {
            type: Sequelize.BOOLEAN
        },
        isLate: {
            type: Sequelize.BOOLEAN
        },
        isDone: {
            type: Sequelize.BOOLEAN
        }
    });

    return Task;
};