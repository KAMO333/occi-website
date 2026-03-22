import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCCI | Leave a Review",
};

const REVIEW_URL = "https://g.page/r/CcgFKLln2lisEBM/review";

export default function QRPage() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');`}</style>

      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 15,
                color: "#fff",
              }}
            >
              OC
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 24,
              color: "#fff",
              letterSpacing: "0.1em",
            }}
          >
            OCCI
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem,8vw,4rem)",
            color: "#fff",
            letterSpacing: "0.04em",
            lineHeight: 1,
            marginBottom: 12,
          }}
        >
          HAPPY WITH OUR WORK?
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: 16,
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          Scan the QR code or tap the button below to leave us a Google review.
          It takes less than a minute and means the world to us.
        </p>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 24,
            display: "inline-block",
            marginBottom: 32,
          }}
        >
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(REVIEW_URL)}&color=0a0a0a&bgcolor=ffffff`}
            alt="OCCI Google Review QR Code"
            style={{ display: "block", width: 220, height: 220 }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#f97316",
              color: "#fff",
              fontWeight: 500,
              padding: "14px 32px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            Leave a Google Review
          </a>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              style={{ width: 24, height: 24, color: "#f97316" }}
              fill="#f97316"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.2)",
            fontSize: 12,
            marginTop: 12,
          }}
        >
          occi.co.za · +27 79 491 3879
        </p>
      </div>
    </div>
  );
}
