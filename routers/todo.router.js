const router = require('express').Router();

const todoController = require('../controllers/todo.controller');
const todoMiddleware = require('../middlewares/todo.middlewares');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoMiddleware.isTodoIdValid,todoController.getTodo);
router.post('/', todoController.createTodo);
router.put('/:id',todoMiddleware.isTodoIdValid, todoController.updateTodo);
router.delete('/:id', todoMiddleware.isTodoIdValid,todoController.deleteTodo);

module.exports = router;