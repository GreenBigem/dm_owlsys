import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    task_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  },

  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
