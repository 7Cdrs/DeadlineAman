export default function ContactSection() {
  return (
    <section className="py-16 bg-blue-100 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Kontak Kami</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          placeholder="Pesan"
          className="w-full border p-3 rounded-lg"
          rows="4"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Kirim
        </button>
      </form>
      <div className="mt-6 text-gray-600">
        <a href="#" className="mx-2 hover:text-blue-600">LinkedIn</a>|
        <a href="#" className="mx-2 hover:text-blue-600">Instagram</a>|
        <a href="#" className="mx-2 hover:text-blue-600">GitHub</a>
      </div>
    </section>
  );
}
