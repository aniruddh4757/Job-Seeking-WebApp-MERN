import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title!"],
    minLength: [3, "Job title must contain atleast 3 characters!"],
    maxLength: [30, "Job title cannot exceed 30 characters!"],
  },
  description: {
    type: String,
    required: [true, "Please provide job description!"],
    minLength: [3, "Job description must contain atleast 3 characters!"],
    maxLength: [150, "Job description cannot exceed 150 characters!"],
  },
  category: {
    type: String,
    required: [true, "Job category is required!"],
  },
  country: {
    type: String,
    required: [true, "Please enter job country"],
  },
  city: {
    type: String,
    required: [true, "Please enter job city"],
  },
  location: {
    type: String,
    required: [true, "Please enter job location"],
    minLength: [10, "Job location must contain atleast 10 characters!"],
    maxLength: [150, "Job location cannot exceed 150 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4],
    maxLength: [9],
  },
  salaryFrom: {
    type: Number,
    minLength: [4],
    maxLength: [9],
  },
  salaryTo: {
    type: Number,
    minLength: [4],
    maxLength: [9],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now(),
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});


export const Job = mongoose.model("job", jobSchema)
