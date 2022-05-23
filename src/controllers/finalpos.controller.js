import FinalPos from '../models/finalpos.model.js'

export const findAll = async (req, res) => {
    try {
        const finalpos = await FinalPos.find({})
        res.json({
            status: 200,
            message: finalpos
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
        const finalpos = await FinalPos.findById(req.params.id)
        if (!finalpos) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        res.json({
            status: 200,
            message: finalpos
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const create = async (req, res) => {
    const finalpos = new FinalPos({
        label: req.body.label,
        coordinates: req.body.coordinates
    })
    try {
        const saveFinalPos = await finalpos.save()
        res.json({
            status: 200,
            message: saveFinalPos
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
        const finalpos = await FinalPos.findById(req.params.id)
        if (!finalpos) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const saveFinalPos = await FinalPos.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true })
        if (saveFinalPos.modifiedCount == 0 || !saveFinalPos.acknowledged) {
            return res.status(403).json({
                status: 403,
                message: "Invalid Scheme / Nothing has Changeed"
            })
        }
        res.json({
            status: 200,
            message: await FinalPos.findById(req.params.id)
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
        const finalpos = await FinalPos.findById(req.params.id)
        if (!finalpos) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const deleteFinalPos = await FinalPos.remove({ _id: req.params.id })
        res.json({
            status: 200,
            message: deleteFinalPos
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}