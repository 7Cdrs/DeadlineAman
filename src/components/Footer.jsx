export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} FreelanceDev. All rights reserved.</p>
      <p className="text-sm text-blue-300 mt-2">
        Dibangun dengan ❤️ menggunakan React & TailwindCSS
      </p>
    </footer>
  );
}
