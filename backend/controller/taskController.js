// task data database-il manage cheyyan Task model import cheyyunnu
const Task = require("../model/taskModel")

// new task create cheyyan addTask function create cheyyunnu
const addTask = async (req, res) => {

  try {

    // frontend-il ninn task details edukunnu
    const {
      title,
      priority,
      status,
      deadline
    } = req.body

    // task database-il create cheyyunnu
    const newTask = await Task.create({
      title,
      priority,
      status,
      deadline
    })

    // task add success response return cheyyunnu
    res.status(201).json({
      msg: "Task Added",
      newTask
    })

  } catch (err) {

    // error console-il display cheyyunnu
    console.log(err)

    // add task failed response return cheyyunnu
    res.status(500).json({
      msg: "Add Task Failed"
    })

  }

}

// ella tasks fetch cheyyan getTasks function create cheyyunnu
const getTasks = async (req, res) => {

  try {

    // database-il ninn ella tasks fetch cheyyunnu
    const tasks = await Task.find()

    // tasks success response return cheyyunnu
    res.status(200).json({
      tasks
    })

  } catch (err) {

    // error console-il display cheyyunnu
    console.log(err)

    // fetch failed response return cheyyunnu
    res.status(500).json({
      msg: "Fetch Failed"
    })

  }

}

// task delete cheyyan deleteTask function create cheyyunnu
const deleteTask = async (req, res) => {

  try {

    // task id use cheyth database-il ninn delete cheyyunnu
    await Task.findByIdAndDelete(
      req.params.id
    )

    // delete success response return cheyyunnu
    res.status(200).json({
      msg: "Task Deleted"
    })

  } catch (err) {

    // error console-il display cheyyunnu
    console.log(err)

    // delete failed response return cheyyunnu
    res.status(500).json({
      msg: "Delete Failed"
    })

  }

}

// task details update cheyyan updateTask function create cheyyunnu
const updateTask = async (req, res) => {

  try {

    // task id use cheyth database-il update cheyyunnu
    const updatedTask =
      await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )

    // update success response return cheyyunnu
    res.status(200).json({
      msg: "Task Updated",
      updatedTask
    })

  } catch (err) {

    // error console-il display cheyyunnu
    console.log(err)

    // update failed response return cheyyunnu
    res.status(500).json({
      msg: "Update Failed"
    })

  }

}

// controller functions export cheyyunnu route files-il use cheyyan
module.exports = { addTask, getTasks, deleteTask, updateTask}