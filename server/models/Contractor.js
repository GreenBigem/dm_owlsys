import mongoose from "mongoose"

const ContractorSchema = new mongoose.Schema(
    {
        surname: {
            type: String,
            required: true,
            unique: false
        },
        name: {
            type: String,
            // required: true,
        },
        user_id: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'

        },
        is_deleted: {
            type: Boolean,
            default: false
        },
    },

    { timestamps: true }
)

export default mongoose.model('Contractor', ContractorSchema)