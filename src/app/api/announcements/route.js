import { connectDB } from "@/app/lib/db";
import Announcement from "@/app/models/Announcement";


// GET all announcements
export async function GET() {
  await connectDB();
  const announcements = await Announcement.find().sort({ createdAt: -1 });
  if(announcements){
    console.log("this is anncouncement");
  }
  return Response.json(announcements);
}

// POST a new announcement
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newAnnouncement = await Announcement.create({
      date: data.date,
      tag: data.tag,
      title: data.title,
      description: data.description,
    });

    return Response.json(newAnnouncement, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
