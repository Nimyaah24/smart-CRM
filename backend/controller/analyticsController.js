// project data database-il ninn fetch cheyyan Project model import cheyyunnu
const Project = require("../model/projectModel")

// task data database-il ninn fetch cheyyan Task model import cheyyunnu
const Task = require("../model/taskModel")

// customer data database-il ninn fetch cheyyan Customer model import cheyyunnu
const Customer = require("../model/customerModel")

// dashboard analytics data generate cheyyan getAnalytics function create cheyyunnu
const getAnalytics = async (req, res) => {

  try {

    // database-il ulla total projects count cheyyunnu
    const totalProjects = await Project.countDocuments()

    // completed status ulla projects count cheyyunnu
    const completedProjects = await Project.countDocuments({ status: "Completed" })

    // database-il ulla total tasks count cheyyunnu
    const totalTasks = await Task.countDocuments()

    // completed status ulla tasks count cheyyunnu
    const completedTasks = await Task.countDocuments({ status: "Completed" })

    // database-il ulla total customers count cheyyunnu
    const totalCustomers = await Customer.countDocuments()

    // revenue calculate cheyyan ella projects fetch cheyyunnu
    const totalRevenue = await Project.find()

    // ella project budget kootti total revenue calculate cheyyunnu
    const revenue = totalRevenue.reduce((acc, item) => acc + Number(item.budget || 0), 0)

    // analytics data frontend-il return cheyyunnu
    res.status(200).json({
      totalProjects,
      completedProjects,
      totalTasks,
      completedTasks,
      totalCustomers,
      revenue
    })

  }

  catch (err) {

    // error console-il display cheyyunnu
    console.log(err)

    // analytics fetch failed response return cheyyunnu
    res.status(500).json({ msg: "Analytics Failed" })

  }

}

// getAnalytics function export cheyyunnu route file-il use cheyyan
module.exports = { getAnalytics }