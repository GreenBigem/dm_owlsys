import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        tasks: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Task'

        }]
    },

    { timestamps: true }
)

export default mongoose.model('User', UserSchema)