import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.models.Announcement ||
  mongoose.model("Announcement", AnnouncementSchema);
