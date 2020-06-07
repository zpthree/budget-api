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
    default: false,
  },
  frequency: {
    type: String,
    enum: ["ONCE", "WEEKLY", "MONTHLY", "YEARLY"],
    default: "ONCE",
  },
  nextDueDate: {
    type: Date,
  },
  type: {
    type: String,
    enum: ["INCOME", "EXPENSE", "SAVINGS"],
    required: true,
  },
  // * TODO add these guys to the squad
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
