
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function dispatchStatus(type, text) {
    const payload = { type, text };
    setStatus(payload);
    window.dispatchEvent(new CustomEvent("contact:status", { detail: payload }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) {
      dispatchStatus("error", "Please enter your email and message.");
      return;
    }

    try {
      dispatchStatus("success", "Thanks — your message was sent successfully (demo).");
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      dispatchStatus("error", "Something went wrong. Please try again later.");
    }
  }

  return (
    <section className=" bg-white" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column: contact details */}
          <div>
            <h3 className="text-3xl font-extrabold mb-4">Want to work with us?</h3>
            <p className="text-gray-500 mb-8">
              You can reach out via the below mentioned details
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-50">
                  <Mail className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <div className="font-semibold">Write to us</div>
                  <a href="mailto:admin@sohamacademy.org" className="text-sky-500">admin@sohamacademy.org</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-50">
                  <Phone className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <div className="font-semibold">Call us at</div>
                  <a href="tel:+918099643298" className="text-sky-500">+91 80996 43298</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-50">
                  <MapPin className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <div className="font-semibold">Soham Academy</div>
                  <div className="text-gray-500">Bagh Amberpet, Hyderabad, Telangana</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                    placeholder="Your email address"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#00B7FF] hover:bg-[#00A3E0] text-white py-3 rounded-md font-semibold"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>

            {status && (
              <div className={`mt-4 text-sm ${status.type === "error" ? "text-rose-600" : "text-green-600"}`}>
                {status.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
