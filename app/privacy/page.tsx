export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-white/70">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p className="text-white/70">We may collect basic contact information (such as name, email, phone) when you reach out for bookings or inquiries.</p>

        <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
        <p className="text-white/70">Information is used strictly for communication, event coordination, and improving services. We do not sell your data.</p>

        <h2 className="text-2xl font-semibold">3. Cookies & Analytics</h2>
        <p className="text-white/70">This site may use cookies or analytics tools for performance and visitor insights. You can disable cookies in your browser.</p>

        <h2 className="text-2xl font-semibold">4. Contact Us</h2>
        <p className="text-white/70">For any privacy-related concerns, please email: manager@billionentertainment.co.in</p>

        <p className="text-white/60 text-sm">Last updated: {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
