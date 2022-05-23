import Score from '../models/score.model.js'

export const findAll = async (req, res) => {
    try {
        const score = await Score.find({username : req.params.username})
        res.json({
            status: 200,
            message: score
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}
export const findAccumulate = async (req, res) => {
    try {
        const score = await Score.find({username : req.params.username})
        var accumulate = 0
        for (let i = 0; i < score.length; i++) {
            accumulate += parseInt(score[i].scores)
        }
        res.json({
            status: 200,
            message: {totalScore : accumulate}
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
        const score = await Score.findById(req.params.id)
        if (!score) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        res.json({
            status: 200,
            message: score
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}

export const create = async (req, res) => {
    const score = new Score({
        username: req.body.username,
        scores: req.body.score,
    })
    try {
        const saveScore = await score.save()
        res.json({
            status: 200,
            message: saveScore
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}


// scoreAll = {
//     score string
// }

// scoreArray = []scoreAll

// for i, in range (len(scoreArray)) {
//    sumScore += scoreArray[i].scores
// }

// coordinate : {
//     x : 123123123.1231
//     y: 123123123.1231
// }

// coordinate : [
//     123123123,
//     123123123
// ]


export const updateOne = async (req, res) => {
    try {
        const score = await Score.findById(req.params.id)
        if (!score) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const saveScore = await Score.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true })
        if (saveScore.modifiedCount == 0 || !saveScore.acknowledged) {
            return res.status(403).json({
                status: 403,
                message: "Invalid Scheme / Nothing has Changeed"
            })
        }
        res.json({
            status: 200,
            message: await Score.findById(req.params.id)
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
        const score = await Score.findById(req.params.id)
        if (!score) {
            return res.status(404).json({
                status: 404,
                message: "Data not Found!"
            })
        }
        const deleteScore = await Score.remove({ _id: req.params.id })
        res.json({
            status: 200,
            message: deleteScore
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error
        })
    }
}