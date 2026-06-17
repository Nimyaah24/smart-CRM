// project data database-il manage cheyyan Project model import cheyyunnu
const Project = require("../model/projectModel")

// new project create cheyyan addProject function create cheyyunnu
const addProject = async (req, res) => {

    try {

        // frontend-il ninn project details edukunnu
        const { title, budget, deadline, progress, status } = req.body

        // project database-il create cheyyunnu
        const newProject = await Project.create({ title, budget, deadline, progress, status })

        // add success response return cheyyunnu
        res.status(201).json({ msg: "project added", newProject })

    }

    catch (err) {

        // error console-il display cheyyunnu
        console.log(err)

        // add failed response return cheyyunnu
        res.status(500).json({ msg: "add project failed" })

    }

}

// ella projects fetch cheyyan getProjects function create cheyyunnu
const getProjects = async (req, res) => {

    try {

        // database-il ninn ella projects fetch cheyyunnu
        const projects = await Project.find()

        // fetch success response return cheyyunnu
        res.status(200).json({ msg: "all projects", projects })

    }

    catch (err) {

        // error console-il display cheyyunnu
        console.log(err)

        // fetch failed response return cheyyunnu
        res.status(500).json({ msg: "get projects failed" })

    }

}

// project delete cheyyan deleteProject function create cheyyunnu
const deleteProject = async (req, res) => {

    try {

        // params-il ninn project id edukunnu
        const { id } = req.params

        // project database-il ninn delete cheyyunnu
        await Project.findByIdAndDelete(id)

        // delete success response return cheyyunnu
        res.status(200).json({ msg: "project deleted" })

    }

    catch (err) {

        // error console-il display cheyyunnu
        console.log(err)

        // delete failed response return cheyyunnu
        res.status(500).json({ msg: "delete failed" })

    }

}

// project details update cheyyan updateProject function create cheyyunnu
const updateProject = async (req, res) => {

    try {

        // params-il ninn project id edukunnu
        const { id } = req.params

        // project database-il update cheyyunnu
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true })

        // update success response return cheyyunnu
        res.status(200).json({ msg: "project updated", updatedProject })

    }

    catch (err) {

        // error console-il display cheyyunnu
        console.log(err)

        // update failed response return cheyyunnu
        res.status(500).json({ msg: "update failed" })

    }

}

// controller functions export cheyyunnu route files-il use cheyyan
module.exports = { addProject, getProjects, deleteProject, updateProject }