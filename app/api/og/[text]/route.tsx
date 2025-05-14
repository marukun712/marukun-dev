import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ text: string }> }
) {
  const { text } = await context.params;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(90deg, rgba(168, 202, 240, 1), rgba(233, 240, 250, 1))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0f1117",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            color: "white",
          }}
        >
          {text}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 8px",
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/87289638?v=4"
            alt="icon"
            style={{ width: 64, height: 64, borderRadius: "50%" }}
          />
          <span style={{ fontSize: 32, color: "white" }}>maril</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
