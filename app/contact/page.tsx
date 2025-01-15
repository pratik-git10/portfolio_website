"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import toast from "react-hot-toast";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { MailIcon } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post("/api/contact", formData);
        if (response.status === 201) {
          toast.success("Form submitted successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          const errorMessage =
            (error.response.data as { message?: string }).message ||
            "Unexpected error";
          toast.error(`Failed to submit the form: ${errorMessage}`);
        } else {
          toast.error("An unexpected error occurred.");
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="mt-24 rounded-md mx-auto backdrop-blur-xl mb-10 max-w-xl">
      <div className="flex flex-col justify-center items-center backdrop-blur-md bg-white/10 p-10 rounded-md mx-10 md:mx-20 shadow-sm shadow-gray-500">
        <h1 className="text-2xl">Contact Me</h1>
        <p className="text-muted-foreground">or you can reach me at</p>
        <a href="mailto:pratikpp2302@gmail.com">
          <p className="text-muted-foreground mb-4 flex justify-center items-center">
            <MailIcon className="mx-1" size={20} />
            pratikpp2302@gmail.com
          </p>
        </a>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md border"
              placeholder="e.g name surname"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md border"
              placeholder="test@mail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 rounded-md border"
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md border bg-white/5 outline-none"
              rows={4}
              placeholder="Write message..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
