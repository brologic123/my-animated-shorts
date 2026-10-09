import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const ink = "#20243a";
const cream = "#fff6e8";
const blue = "#b8e3ff";
const orange = "#ffb65c";

const scenes = [
  { start: 0, end: 180, speaker: "BOSS", line: "EMERGENCY MEETING. RIGHT NOW!", color: "#f5c2c7" },
  { start: 180, end: 360, speaker: "EMPLOYEE", line: "IS THE BUILDING ON FIRE?", color: "#c5e9ff" },
  { start: 360, end: 600, speaker: "BOSS", line: "NO. WE NEED TO DISCUSS THE MEETING SCHEDULE.", color: "#f5c2c7" },
  { start: 600, end: 900, speaker: "EMPLOYEE", line: "SO... COULD THIS HAVE BEEN AN EMAIL?", color: "#c5e9ff" },
];

const Person: React.FC<{ boss?: boolean; frame: number }> = ({ boss = false, frame }) => {
  const bob = Math.sin(frame / 8) * 7;
  const skin = boss ? "#d9956a" : "#9d6549";
  const shirt = boss ? "#7546a8" : "#247c8b";
  return (
    <div style={{ position: "absolute", bottom: 430, left: boss ? 115 : 575, width: 360, height: 680, transform: `translateY(${bob}px)` }}>
      {/* head */}
      <div style={{ position: "absolute", top: 20, left: 78, width: 205, height: 230, borderRadius: "44% 44% 48% 48%", background: skin, border: `8px solid ${ink}` }}>
        <div style={{ position: "absolute", top: -16, left: 2, width: 190, height: 75, borderRadius: "65% 50% 10% 15%", background: boss ? "#39303b" : "#302a27", border: `5px solid ${ink}` }} />
        <div style={{ position: "absolute", top: 100, left: 38, width: 34, height: 18, borderRadius: "50%", background: "white" }}><div style={{ margin: "4px auto", width: 10, height: 10, borderRadius: "50%", background: ink }} /></div>
        <div style={{ position: "absolute", top: 100, right: 38, width: 34, height: 18, borderRadius: "50%", background: "white" }}><div style={{ margin: "4px auto", width: 10, height: 10, borderRadius: "50%", background: ink }} /></div>
        <div style={{ position: "absolute", top: 155, left: 67, width: 62, height: 22, borderBottom: `8px solid ${ink}`, borderRadius: "0 0 50% 50%" }} />
        {boss && <div style={{ position: "absolute", top: 60, left: 23, width: 58, height: 12, background: ink, transform: "rotate(-12deg)" }} />}
      </div>
      {/* body */}
      <div style={{ position: "absolute", top: 245, left: 38, width: 285, height: 350, borderRadius: "70px 70px 25px 25px", background: shirt, border: `8px solid ${ink}` }}>
        <div style={{ position: "absolute", top: 8, left: 120, width: 35, height: 90, background: boss ? "#f7f0e8" : "#f6d46b", clipPath: "polygon(0 0,100% 0,50% 100%)" }} />
        <div style={{ position: "absolute", top: 125, left: 28, width: 210, height: 12, background: "rgba(255,255,255,.35)", borderRadius: 8 }} />
      </div>
      {/* arms */}
      <div style={{ position: "absolute", top: 280, left: -5, width: 70, height: 240, borderRadius: 40, background: shirt, border: `7px solid ${ink}`, transform: `rotate(${boss ? -20 : 15}deg)` }} />
      <div style={{ position: "absolute", top: 280, right: -4, width: 70, height: 240, borderRadius: 40, background: shirt, border: `7px solid ${ink}`, transform: `rotate(${boss ? 20 : -15}deg)` }} />
      {/* legs */}
      <div style={{ position: "absolute", top: 570, left: 70, width: 85, height: 105, background: "#343d5b", border: `7px solid ${ink}`, borderRadius: 18 }} />
      <div style={{ position: "absolute", top: 570, right: 70, width: 85, height: 105, background: "#343d5b", border: `7px solid ${ink}`, borderRadius: 18 }} />
    </div>
  );
};

export const MeetingComedy: React.FC = () => {
  const frame = useCurrentFrame();
  const active = scenes.find((s) => frame >= s.start && frame < s.end) ?? scenes[3];
  const enter = interpolate(frame - active.start, [0, 12], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const isBoss = active.speaker === "BOSS";
  return (
    <AbsoluteFill style={{ background: cream, fontFamily: "Arial, Helvetica, sans-serif", color: ink, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: "linear-gradient(180deg,#d9f0ff 0%,#fff6e8 62%)" }} />
      {/* office window */}
      <div style={{ position: "absolute", top: 190, left: 70, width: 940, height: 390, border: `12px solid ${ink}`, borderRadius: 25, background: blue, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 460, top: 0, height: "100%", width: 12, background: ink }} />
        <div style={{ position: "absolute", left: 0, top: 185, height: 12, width: "100%", background: ink }} />
        <div style={{ position: "absolute", top: 45, left: 80, width: 160, height: 75, borderRadius: 70, background: "white", opacity: 0.85 }} />
        <div style={{ position: "absolute", top: 85, right: 100, width: 200, height: 65, borderRadius: 70, background: "white", opacity: 0.85 }} />
      </div>
      <div style={{ position: "absolute", top: 80, width: "100%", textAlign: "center", fontSize: 52, fontWeight: 900, letterSpacing: 3 }}>THE OFFICE</div>
      <div style={{ position: "absolute", top: 600, left: 0, width: "100%", height: 720, background: "#f4d6b0", borderTop: `12px solid ${ink}` }} />
      <Person boss frame={frame} />
      <Person frame={frame + 17} />
      {/* meeting table */}
      <div style={{ position: "absolute", bottom: 230, left: 70, width: 940, height: 190, borderRadius: "35px 35px 20px 20px", background: orange, border: `12px solid ${ink}` }} />
      <div style={{ position: "absolute", bottom: 110, left: 150, width: 60, height: 130, background: ink, borderRadius: 10 }} />
      <div style={{ position: "absolute", bottom: 110, right: 150, width: 60, height: 130, background: ink, borderRadius: 10 }} />
      {/* speech bubble */}
      <div style={{ position: "absolute", top: 1260, left: 60, right: 60, minHeight: 250, padding: "38px 42px", boxSizing: "border-box", border: `10px solid ${ink}`, borderRadius: 44, background: active.color, transform: `translateY(${enter}px)`, boxShadow: "0 16px 0 rgba(32,36,58,.14)" }}>
        <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: 5, marginBottom: 16, textAlign: "center" }}>{active.speaker}</div>
        <div style={{ fontSize: active.line.length > 38 ? 45 : 54, lineHeight: 1.12, fontWeight: 900, textAlign: "center" }}>{active.line}</div>
      </div>
      <div style={{ position: "absolute", bottom: 44, width: "100%", textAlign: "center", fontSize: 28, fontWeight: 800, letterSpacing: 2, opacity: 0.75 }}>A MEETING THAT SHOULD'VE BEEN AN EMAIL</div>
      {/* tiny punchline sparkle */}
      {frame > 760 && <div style={{ position: "absolute", top: 1080, right: 90, fontSize: 90, fontWeight: 900, color: "#f08a24", transform: `rotate(${Math.sin(frame) * 12}deg)` }}>?!</div>}
    </AbsoluteFill>
  );
};
