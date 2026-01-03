export default function SuccessPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>🎉 Order Placed Successfully</h1>
      <p>Thank you for your order.</p>
      <p>We will contact you soon.</p>

      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
        }}
      >
        Back to Home
      </a>
    </main>
  );
}
