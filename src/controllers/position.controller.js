import Position from '../models/position.model.js'

export const findAll = async (req, res) => {
    try {
        const position = await Position.find({})
        res.json({
            status: 200,
            message: position
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const findMe = async (req, res) => {
    console.log(req.user)
    try {
        const position = await Position.find({userId:req.user._id})
        res.json({
            status: 200,
            message: position
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const findOne = async (req, res) => {
    try {
        const position = await Position.findById(req.params.id)
        if (!position) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        res.json({
            status: 200,
            message: position
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const create = async (req, res) => {
    const position = new Position({
        userId: req.user._id,
        initCoordinate: req.body.initCoordinate,
        finalCoordinate: req.body.finalCoordinate,
    })
    try {
        const savePosition = await position.save()
        res.json({
            status: 200,
            message: savePosition
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const updateOne = async (req, res) => {
    try {
        const position = await Position.findById(req.params.id)
        if (!position) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const savePosition = await Position.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true })
        if (savePosition.modifiedCount == 0 || !savePosition.acknowledged) {
            return res.status(403).json({
                status: 403,
                message: "Invalid Scheme / Nothing has Changeed"
            })
        }
        res.json({
            status: 200,
            message: await Position.findById(req.params.id)
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const deleteOne = async (req, res) => {
    try {
        const position = await Position.findById(req.params.id)
        if (!position) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const deletePosition = await Position.remove({ _id: req.params.id })
        res.json({
            status: 200,
            message: deletePosition
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}