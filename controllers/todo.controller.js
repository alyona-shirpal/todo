const storage = require('../modules/Storage');
const { statusMessage, statusCodes } = require('../configs');

module.exports = {
    getAllTodos: (req, res, next) => {
        try {
            res.json(Object.fromEntries(storage));
        } catch (e) {
            next(e);
        }
    },
    createTodo: (req, res, next) => {
        try {
            const newEntryId = storage.size + 1;

            storage.set(newEntryId, req.body);

            res.status(statusCodes.created).json(statusMessage.created);
        } catch (e) {
            next(e);
        }
    },
    updateTodo: (req, res, next) => {
        try {
            const { id } = req.params;

            storage.set(+id, req.body);

            res.status(statusCodes.updated).json(statusMessage.updated);
        } catch (e) {
            next(e);
        }
    },
    deleteTodo: (req, res, next) => {
            try {
                const { id } = req.params;

                storage.delete(+id)

                res.status(statusCodes.deleted).json(statusMessage.deleted);
            } catch (e) {
                next(e);
            }
        },
    getTodo: (req, res, next) => {
            try {
                const { id } = req.params;

                const todo = storage.get(+id);

                res.json(todo);
            } catch (e) {
                next(e);
            }
        }
};