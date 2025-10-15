import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactSection() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_0amjqi8",      // ganti dengan service ID dari EmailJS
        "template_4q1d3wy",     // ganti dengan template ID
        form.current,
        "KS0jjbVdeVzUA-dCo"       // ganti dengan public key
      )
      .then(
        (result) => {
          console.log("Email berhasil dikirim:", result.text);
          setSuccess(true);
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error("Gagal mengirim email:", error.text);
          setSuccess(false);
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
        <div>
          <h2
            data-aos="fade-right"
            data-aos-duration="800"
            className="text-2xl sm:text-3xl font-bold text-[#38b6ff] mb-3 md:mb-4"
          >
            Hubungi Kami
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6"
          >
            Punya ide atau proyek yang ingin diwujudkan? Kami siap bantu membangun solusi digital yang sesuai kebutuhanmu.
          </p>

          <div className="space-y-3 md:space-y-4 text-sm sm:text-base text-gray-700">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="700"
              className="flex items-center gap-3"
            >
              <Mail className="text-[#38b6ff] w-5 h-5 flex-shrink-0" />
              <span className="break-all">support@deadlineaman.my.id</span>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="700"
              className="flex items-center gap-3"
            >
              <Phone className="text-[#38b6ff] w-5 h-5 flex-shrink-0" />
              <span>+62 812-5205-1253</span>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="700"
              className="flex items-center gap-3"
            >
              <MapPin className="text-[#38b6ff] w-5 h-5 flex-shrink-0" />
              <span>Surabaya, Indonesia</span>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="700"
            className="mt-6 flex gap-4 text-sm sm:text-base"
          >
            <a
              href="#"
              className="!text-[#38b6ff] hover:!text-[#2a9de6] transition font-medium"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="!text-[#38b6ff] hover:!text-[#2a9de6] transition font-medium"
            >
              Instagram
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          data-aos="fade-left"
          data-aos-duration="800"
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-5 border border-[#38b6ff]/20"
        >
          <input
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            type="text"
            name="user_name"
            placeholder="Nama Lengkap"
            required
            className="w-full border border-gray-300 focus:border-[#38b6ff] focus:ring-2 focus:ring-[#38b6ff]/20 p-3 rounded-lg outline-none transition text-sm sm:text-base"
          />
          <input
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
            type="email"
            name="user_email"
            placeholder="Alamat Email"
            required
            className="w-full border border-gray-300 focus:border-[#38b6ff] focus:ring-2 focus:ring-[#38b6ff]/20 p-3 rounded-lg outline-none transition text-sm sm:text-base"
          />
          <textarea
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            name="message"
            placeholder="Pesan Anda"
            required
            className="w-full border border-gray-300 focus:border-[#38b6ff] focus:ring-2 focus:ring-[#38b6ff]/20 p-3 rounded-lg outline-none transition text-sm sm:text-base"
            rows="5"
          ></textarea>

          <button
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="600"
            type="submit"
            disabled={isSending}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#38b6ff] to-[#2a9de6] text-white py-3 rounded-lg hover:from-[#2a9de6] hover:to-[#1e8bd1] transition font-medium shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base disabled:opacity-70"
          >
            <Send className="w-5 h-5" />
            {isSending ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {success === true && (
            <p className="text-green-600 text-center text-sm sm:text-base">
              ✅ Pesan berhasil dikirim!
            </p>
          )}
          {success === false && (
            <p className="text-red-600 text-center text-sm sm:text-base">
              ❌ Gagal mengirim pesan. Coba lagi nanti.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
