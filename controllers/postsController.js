const postsModel = require("../models/postsModel");

module.exports.Add = async (req, res) => {
    try {
        const newpost = await postsModel.build({
            title: req.body.title,
            description: req.body.description,
            isPublished: req.body.isPublished
        });
        const savedpost = await newpost.save();
        return res.status(200).json({ message: "post added successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};

module.exports.All = async (req, res) => {
    try {
        const allposts = await postsModel.findAll();
        return res.status(200).json({ message: "posts fetched successfully", data: allposts });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};

module.exports.Show = async (req, res) => {
    try {
        const specificpost = await postsModel.findOne({ where: { id: req.params.id } });
        return res.status(200).json({ message: "post fetched successfully", data: specificpost });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};

module.exports.Update = async (req, res) => {
    try {
        const updatedpost = await postsModel.update({
            title: req.body.title,
            description: req.body.description,
            isPublished: req.body.isPublished
        }, { where: { id: req.params.id } });
        return res.status(200).json({ message: "post updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};

module.exports.Remove = async (req, res) => {
    try {
        const removedpost = await postsModel.destroy({ where: { id: req.params.id } });
        return res.status(200).json({ message: "post removed successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};
