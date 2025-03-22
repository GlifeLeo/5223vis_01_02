"use client"

import { useState } from "react"


export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent successfully!")
  }

  return (
    <div className="w-4/5 mx-auto py-10">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-gray-600 text-center mt-2">
        Feel free to reach out to us. We’d love to hear from you!
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">+1 234 567 890</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">contact@example.com</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">123 Main St, City, Country</p>
          </div>

          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509906!2d144.95592311531664!3d-37.8172099797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c09cb9e2b4a9e5!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1630644136879!5m2!1sen!2sau"
            width="100%"
            height="200"
            className="rounded-lg shadow-lg border"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a href="#" className="text-gray-600 hover:text-black">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.497v-9.294h-3.126v-3.622h3.126v-2.671c0-3.097 1.894-4.786 4.661-4.786 1.325 0 2.463.099 2.794.144v3.24h-1.917c-1.504 0-1.794.715-1.794 1.762v2.311h3.588l-.467 3.622h-3.121v9.294h6.122c.732 0 1.324-.592 1.324-1.324v-21.351c0-.733-.592-1.325-1.324-1.325z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.39-1.833.654-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.563-2.005.974-3.127 1.194-.896-.954-2.173-1.55-3.593-1.55-2.716 0-4.92 2.204-4.92 4.92 0 .39.044.765.127 1.128-4.086-.205-7.713-2.162-10.141-5.144-.422.725-.664 1.562-.664 2.465 0 1.701.866 3.202 2.182 4.08-.805-.026-1.561-.247-2.224-.616v.062c0 2.376 1.693 4.357 3.946 4.808-.413.111-.849.171-1.296.171-.317 0-.626-.031-.928-.089.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.801 2.104-6.102 2.104-.396 0-.787-.023-1.174-.068 2.177 1.397 4.765 2.213 7.548 2.213 9.056 0 14.012-7.5 14.012-14.013 0-.213-.005-.426-.014-.637.962-.693 1.796-1.562 2.457-2.55z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
