"use client";

import { herovideo } from "@/assets";
import Video from "next-video";

export default function Page() {
  // <Video src={heroVideo} />;
  return (
    <div>
      <div>
        <Video src={herovideo} />
      </div>
      <div>
        <h1>Hero Section</h1>
        <div></div>
      </div>
    </div>
  );
}
