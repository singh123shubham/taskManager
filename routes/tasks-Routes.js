const express = require('express')

const router = express.Router()

const {getAllTasks,
        updateTasks,
        createTasks,
        deleteTasks,
        getTasks}  = require('../controller/tasks-controller')

router.route('/').get(getAllTasks).post(createTasks)

router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)


module.exports = router