import InitPos from '../models/initpos.model.js'

export const findAll = async (req, res) => {
    try {
        const initpos = await InitPos.find({})
        res.json({
            status: 200,
            message: initpos
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
        const initpos = await InitPos.findById(req.params.id)
        if (!initpos) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        res.json({
            status: 200,
            message: initpos
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const create = async (req, res) => {
    const initpos = new InitPos({
        label: req.body.label,
        coordinates: req.body.coordinates
    })
    try {
        const saveInitPos = await initpos.save()
        res.json({
            status: 200,
            message: saveInitPos
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
        const initpos = await InitPos.findById(req.params.id)
        if (!initpos) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const saveInitPos = await InitPos.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true })
        if (saveInitPos.modifiedCount == 0 || !saveInitPos.acknowledged) {
            return res.status(403).json({
                status: 403,
                message: "Invalid Scheme / Nothing has Changeed"
            })
        }
        res.json({
            status: 200,
            message: await InitPos.findById(req.params.id)
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
        const initpos = await InitPos.findById(req.params.id)
        if (!initpos) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const deleteInitPos = await InitPos.remove({ _id: req.params.id })
        res.json({
            status: 200,
            message: deleteInitPos
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}