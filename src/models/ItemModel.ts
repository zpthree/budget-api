import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  recurring: {
    type: Boolean,
    required: true,
    default: false,
  },
  frequency: {
    type: String,
    enum: ["Once", "Weekly", "Monthly", "Yearly"],
    required: true,
    default: "Once",
  },
  nextDueDate: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ["Income", "Expense", "Saving"],
    required: true,
  },
  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  // },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});

export default mongoose.model("Item", ItemSchema);
