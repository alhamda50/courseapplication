const mongoose = require('mongoose');

//schema
const courseSchema = mongoose.Schema({
    courseId: { type: Number, required: true },
    courseName: { type: String, required: true },
    courseCategory: { type: String, required: true },
    courseDescription: { type: String, required: true },
    courseImage: { type: String, required: true },
    courseFee: { type: Number, required: true }
});


const courseData = mongoose.model('course', courseSchema);
module.exports = courseData;