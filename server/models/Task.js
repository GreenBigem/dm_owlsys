import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        end_date: {
            type: Date,
            required: false,
        },
        imgUrl: {
            type: String,
            required: false,
            default: ''
        },
        views: {
            type: Number,
            required: false,
            default: 0
        },
        author: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        },
        comments: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Comment'
        }]
    },

    { timestamps: true }
)

export default mongoose.model('Task', TaskSchema)