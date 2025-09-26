export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-white/70">Welcome to the official website of Vivek Morvadia. By accessing or using this site, you agree to the following terms and conditions.</p>

        <h2 className="text-2xl font-semibold">1. Use of Content</h2>
        <p className="text-white/70">
          All media, music, images, and branding on this site are the property of Vivek Morvadia unless otherwise stated. Unauthorized reproduction or distribution is prohibited.
        </p>

        <h2 className="text-2xl font-semibold">2. Bookings & Services</h2>
        <p className="text-white/70">Event bookings are handled via official contact details only. Any third-party communication not listed here is not authorized.</p>

        <h2 className="text-2xl font-semibold">3. Limitation of Liability</h2>
        <p className="text-white/70">We are not liable for any damages resulting from the use of this website or external links.</p>

        <p className="text-white/60 text-sm">Last updated: {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
