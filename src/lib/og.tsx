import { resume } from "@/data/resume";
import { withBasePath } from "@/lib/basePath";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function OGTemplate() {
  const imageUrl = resume.personal.avatar
    ? new URL(withBasePath(resume.personal.avatar), siteUrl).toString()
    : undefined;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fafafa",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "700px",
        }}
      >
        <div
          style={{
            fontFamily: "Cabinet Grotesk, Inter, system-ui, sans-serif",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#000000",
            letterSpacing: "-0.03em",
          }}
        >
          {resume.personal.name}
        </div>
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "#666666",
            marginTop: "24px",
            maxWidth: "600px",
          }}
        >
          {resume.personal.description}
        </div>
      </div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={resume.personal.name}
          style={{
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "8px solid #ffffff",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            flexShrink: 0,
          }}
        />
      )}
    </div>
  );
}
