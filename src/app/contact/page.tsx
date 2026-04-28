
"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Prepare data for Web3Forms
    const data = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: form.subject,
      from_name: form.name,
      email: form.email,
      message: form.message,
      social: form.social,
      to: "tghtfgodhand@gmail.com",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again later.");
    }
  }

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-black py-16 px-4">
        {/* Logo at the top, links to home */}
        <Link href="/" className="mb-8 block">
          <Image src="/Logoss.png" alt="TGH Logo" width={80} height={80} priority className="mx-auto" />
        </Link>
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
