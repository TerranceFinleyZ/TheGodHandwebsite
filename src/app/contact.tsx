import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    social: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-black py-16 px-4">
        <div className="w-full max-w-lg bg-[#18181b] rounded-xl shadow-lg p-8 border border-[#dc2626]/30">
          <h1 className="text-3xl font-bold text-[#dc2626] mb-6 text-center">Contact Us</h1>
          {submitted ? (
            <div className="text-green-500 text-center font-semibold">Thank you for reaching out! We'll get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-[#0d0d0d] border border-[#dc2626]/30 text-[#f5f0eb] rounded px-4 py-3 focus:outline-none focus:border-[#dc2626]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-[#0d0d0d] border border-[#dc2626]/30 text-[#f5f0eb] rounded px-4 py-3 focus:outline-none focus:border-[#dc2626]"
              />
              <input
                type="text"
                name="social"
                placeholder="Facebook / Social Media"
                value={form.social}
                onChange={handleChange}
                className="bg-[#0d0d0d] border border-[#dc2626]/30 text-[#f5f0eb] rounded px-4 py-3 focus:outline-none focus:border-[#dc2626]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="bg-[#0d0d0d] border border-[#dc2626]/30 text-[#f5f0eb] rounded px-4 py-3 focus:outline-none focus:border-[#dc2626]"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-[#0d0d0d] border border-[#dc2626]/30 text-[#f5f0eb] rounded px-4 py-3 focus:outline-none focus:border-[#dc2626] resize-none"
              />
              <button
                type="submit"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-[#0d0d0d] font-bold py-3 rounded-full transition-all duration-300 mt-2"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
