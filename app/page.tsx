export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111827" }}>
      <section style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        padding: "80px 25px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "52px", marginBottom: "15px" }}>
          Abramson Resources LLC
        </h1>
        <h2 style={{ fontSize: "26px", fontWeight: "normal", color: "#dbeafe" }}>
          Business Formation • Tax Advising • Tax Preparation • Strategy
        </h2>
        <p style={{ maxWidth: "750px", margin: "30px auto", fontSize: "20px", lineHeight: "1.6" }}>
          Helping entrepreneurs, business owners, and investors make smarter financial decisions with clear business and tax strategies.
        </p>
        <a href="mailto:info@abramsonresources.com" style={{
          display: "inline-block",
          background: "white",
          color: "#1e3a8a",
          padding: "15px 28px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Schedule a Consultation
        </a>
      </section>

      <section style={{ padding: "70px 25px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px" }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px"
        }}>
          {[
            ["Business Formation", "Start your company with the right structure and foundation."],
            ["Tax Advising", "Plan ahead and make smarter tax decisions throughout the year."],
            ["Tax Preparation", "Professional tax preparation support for individuals and businesses."],
            ["Business Strategy", "Guidance for growth, structure, cash flow, and long-term planning."]
          ].map(([title, text]) => (
            <div key={title} style={{
              background: "#f8fafc",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
            }}>
              <h3 style={{ fontSize: "22px", marginBottom: "12px", color: "#1e3a8a" }}>
                {title}
              </h3>
              <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#475569" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f1f5f9", padding: "70px 25px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "34px" }}>Why Choose Abramson Resources?</h2>
          <p style={{ fontSize: "19px", lineHeight: "1.7", color: "#475569" }}>
            We provide practical, clear, and strategic guidance to help clients reduce confusion,
            prepare properly, and build stronger financial futures.
          </p>
        </div>
      </section>

      <section style={{
        background: "#0f172a",
        color: "white",
        padding: "60px 25px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "34px" }}>Contact Us</h2>
        <p style={{ fontSize: "20px" }}>Email: info@abramsonresources.com</p>
        <p style={{ fontSize: "20px" }}>Phone: 1-800-256-4907</p>
        <p style={{ color: "#cbd5e1" }}>Serving clients nationwide</p>
      </section>
    </main>
  );
}