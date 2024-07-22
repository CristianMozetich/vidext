"use client";
import { Tldraw } from "tldraw";

import "tldraw/tldraw.css";

export default function TldrawDashboard() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Tldraw />
    </div>
  );
}
