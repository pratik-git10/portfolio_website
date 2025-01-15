import { NextResponse } from "next/server";
import Contact from "@/utils/contactSchema";
import connectDB from "@/utils/db";

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message }: ContactData = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    return NextResponse.json(
      { message: "Contact form submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
