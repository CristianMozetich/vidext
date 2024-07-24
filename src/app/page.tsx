"use client";

import TldrawDashboard from "@/components/tldraw/Tldraw";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <div>
        <TldrawDashboard />
      </div>
    </main>
  );
}
