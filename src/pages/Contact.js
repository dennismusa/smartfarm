/* eslint-disable jsx-a11y/iframe-has-title */
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            Contact Smart Farm
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for drip irrigation installation, smart farm
            solutions, and expert agricultural consulting.
          </p>
        </div>

        {/* Quick Services CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center">💧 Drip Irrigation</div>
          <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center">📈 Smart Farm Tech</div>
          <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center">🛠 Farm Consulting</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-green-700">
              Get in Touch
            </h2>

            <div className="space-y-6 text-gray-600">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+254 726214345</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-green-600 text-xl" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>olemusah@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>kimana,kajiado</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-50 p-4 rounded-lg text-green-800">
              <p className="font-semibold">📞 Free farm assessment available in selected areas.</p>
              <p className="text-sm">Contact us today to schedule a visit.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-green-700">
              Send Us an Inquiry
            </h2>

            <form className="space-y-5">
              <input type="text" placeholder="Full Name" required className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              <input type="text" placeholder="Phone Number" required className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              <input type="text" placeholder="Farm Location" required className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              <textarea placeholder="Tell us about your farm..." rows="4" required className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"></textarea>

              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-md">
  <iframe
    className="w-full h-64 md:h-96"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.657290947427!2d36.810321!3d-2.035586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f27b6e4e02b7f%3A0x8b1d6f51ecf8aa0f!2sKimana%2C%20Kajiado%20County%2C%20Kenya!5e0!3m2!1sen!2sus!4v1616171478291!5m2!1sen!2sus"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>


      </div>
    </div>
  );
}
