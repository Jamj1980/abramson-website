export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: "40px",
      maxWidth: "1000px",
      margin: "0 auto",
      lineHeight: "1.6"
    }}>
      
      <h1 style={{
        fontSize: "48px",
        marginBottom: "10px"
      }}>
        Abramson Resources LLC
      </h1>

      <h2 style={{
        color: "#555",
        marginBottom: "30px"
      }}>
        Business Formation, Tax Advising & Strategy
      </h2>

      <p style={{
        fontSize: "20px",
        marginBottom: "40px"
      }}>
        Helping entrepreneurs, business owners, and investors
        make smarter financial decisions through strategic
        tax planning and business consulting.
      </p>

      <section style={{ marginBottom: "50px" }}>
        <h3>Our Services</h3>

        <ul style={{
          fontSize: "18px",
          paddingLeft: "20px"
        }}>
          <li>Business Formation</li>
          <li>Tax Advising</li>
          <li>Tax Preparation</li>
          <li>Business Strategy</li>
          <li>Financial Planning</li>
        </ul>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h3>Why Choose Abramson Resources?</h3>

        <p>
          We help clients reduce complexity, understand their
          financial position, and create strategies for
          long-term success.
        </p>
      </section>

      <section>
        <h3>Contact</h3>

        <p>Email: info@abramsonresources.com</p>

        <p>Phone: 1-800-256-4907</p>

        <p>Serving Clients Nationwide</p>
      </section>

    </main>
  );
}