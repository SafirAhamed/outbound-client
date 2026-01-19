"use client";

export default function CustomerStoriesMosaicBackground() {
  return (
    <>
      {/* Background texture */}
      {/* <div
        aria-hidden
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.14), transparent 52%), repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 10px)",
        }}
      /> */}

      {/* Fine dot-grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 0.8px, transparent 0.85px)",
          backgroundSize: "10px 10px",
          backgroundPosition: "0 0",
        }}
      />

      {/* Topographic rings */}
      {/* <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 18% 38%, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 1px, transparent 1px, transparent 18px), repeating-radial-gradient(circle at 82% 62%, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 22px)",
        }}
      /> */}

      {/* Diagonal weave */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(45deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* Paper-fiber streaks */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 56px)",
        }}
      />

      {/* Extra micro-speckle */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 0.6px, transparent 0.7px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "6px 10px",
        }}
      />

      {/* Top sky scene: clouds + hot air balloons */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-full h-44 sm:h-52 opacity-[0.28]"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
      >
        {/* soft cloud bands */}
        <path
          d="M0,70 C120,40 240,90 360,60 C500,25 610,70 740,55 C900,35 1010,85 1200,60 L1200,0 L0,0 Z"
          fill="rgba(210,210,210,0.12)"
        />
        <path
          d="M0,130 C160,110 240,150 380,132 C520,114 640,150 800,132 C980,112 1080,150 1200,128 L1200,0 L0,0 Z"
          fill="rgba(200,200,200,0.08)"
        />

        {/* a few fluffy cloud outlines */}
        <g
          fill="rgba(210,210,210,0.06)"
          stroke="rgba(220,220,220,0.34)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M160,94 C155,78 172,66 188,70 C196,52 222,54 228,74 C246,70 262,82 258,100 C276,106 278,132 258,140 L176,140 C160,140 150,126 154,112 C146,108 146,98 160,94 Z" />
          <path d="M905,88 C900,74 914,62 930,66 C938,48 965,50 971,70 C990,66 1004,78 1000,96 C1018,102 1020,126 1002,134 L918,134 C902,134 892,120 896,108 C888,104 890,92 905,88 Z" />
        </g>

        {/* airplane (replaces left balloon) */}
        <g transform="translate(120 46) rotate(-10)">
          {/* contrail */}
          {/* <path
            d="M-54,46 C-18,26 18,34 54,18"
            fill="none"
            stroke="rgba(210,210,210,0.48)"
            strokeWidth="2"
            strokeDasharray="2 9"
            strokeLinecap="round"
          /> */}

          {/* fuselage */}
          {/* <path
            d="M18,44 C24,30 44,22 62,26 L90,32 C94,33 94,37 90,38 L62,44 C44,48 24,56 18,44 Z"
            fill="rgba(215,215,215,0.20)"
            stroke="rgba(235,235,235,0.72)"
            strokeWidth="2"
            strokeLinejoin="round"
          /> */}

          {/* wings */}
          {/* <path
            d="M44,38 L28,18 L48,20 L66,36 Z"
            fill="rgba(210,210,210,0.18)"
            stroke="rgba(235,235,235,0.65)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M46,40 L32,64 L52,60 L70,42 Z"
            fill="rgba(210,210,210,0.14)"
            stroke="rgba(235,235,235,0.55)"
            strokeWidth="2"
            strokeLinejoin="round"
          /> */}

          {/* tail */}
          {/* <path
            d="M26,42 L12,28 L22,28 L36,40 Z"
            fill="rgba(210,210,210,0.12)"
            stroke="rgba(235,235,235,0.55)"
            strokeWidth="2"
            strokeLinejoin="round"
          /> */}
        </g>

        {/* hot air balloon right */}
        <g
          transform="translate(1005 52)"
          fill="rgba(210,210,210,0.06)"
          stroke="rgba(225,225,225,0.55)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M44,8 C26,10 12,28 12,48 C12,78 28,96 44,108 C60,96 76,78 76,48 C76,28 62,10 44,8 Z" />
          <path d="M44,8 C36,30 36,82 44,108" />
          <path d="M44,8 C52,30 52,82 44,108" />
          <path d="M24,44 C36,52 52,52 64,44" />
          <path d="M30,106 L34,126" />
          <path d="M58,106 L54,126" />
          <path d="M34,126 L54,126" />
          <path d="M36,126 L36,138" />
          <path d="M52,126 L52,138" />
          <path d="M36,138 L52,138" />
        </g>
      </svg>

      {/* Travel route line */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
      >
        <path
          d="M-40,310 C120,160 220,360 360,250 C510,130 600,330 760,210 C910,90 1010,260 1240,120"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
          strokeDasharray="6 10"
          strokeLinecap="round"
        />
        <circle cx="360" cy="250" r="5" fill="rgba(255,255,255,0.55)" />
        <circle cx="760" cy="210" r="5" fill="rgba(255,255,255,0.55)" />
        <circle cx="1045" cy="160" r="6" fill="rgba(255,255,255,0.55)" />
      </svg>

      {/* Flight doodles / scribbles */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-30 left-0 w-full h-56 sm:h-64 opacity-[0.26]"
        viewBox="0 0 1300 260"
        preserveAspectRatio="none"
      >
        <path
          d="M40,78 C140,28 220,110 300,86 C380,62 450,36 540,56 C650,82 720,18 820,46 C940,76 1000,146 1160,112"
          fill="none"
          stroke="rgba(230,230,230,0.70)"
          strokeWidth="2"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        {/* <path
          d="M80,196 C200,162 298,214 416,190 C540,164 630,214 758,186 C890,156 988,184 1120,156"
          fill="none"
          stroke="rgba(205,205,205,0.58)"
          strokeWidth="1.6"
          strokeDasharray="1 9"
          strokeLinecap="round"
        /> */}

        {/* Tiny plane marks */}
        <g
          fill="none"
          stroke="rgba(235,235,235,0.70)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g transform="translate(540 56) rotate(-18)">
            <path d="M0 0 L18 0" />
            <path d="M6 -6 L18 0 L6 6" />
            <path d="M8 -3 L2 -9" />
            <path d="M8 3 L2 9" />
          </g>
          <g transform="translate(820 46) rotate(10)">
            <path d="M0 0 L18 0" />
            <path d="M6 -6 L18 0 L6 6" />
            <path d="M8 -3 L2 -9" />
            <path d="M8 3 L2 9" />
          </g>
          {/* <g transform="translate(758 186) rotate(-8)">
            <path d="M0 0 L18 0" />
            <path d="M6 -6 L18 0 L6 6" />
            <path d="M8 -3 L2 -9" />
            <path d="M8 3 L2 9" />
          </g> */}
        </g>
      </svg>

      {/* Bottom mountains */}
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-full h-40 sm:h-48 opacity-[0.34]"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
      >
        <path
          d="M0,220 L0,150 L90,170 L170,138 L250,160 L330,118 L420,160 L520,95 L620,150 L720,110 L820,150 L930,92 L1040,150 L1200,120 L1200,220 Z"
          fill="rgba(190,190,190,0.22)"
        />
        <path
          d="M0,220 L0,165 L110,188 L200,160 L290,182 L380,142 L460,180 L560,125 L660,182 L770,145 L860,176 L980,130 L1100,180 L1200,156 L1200,220 Z"
          fill="rgba(170,170,170,0.18)"
        />
        <path
          d="M520,95 L560,125 L540,126 Z"
          fill="rgba(240,240,240,0.16)"
        />
        <path
          d="M930,92 L980,130 L954,132 Z"
          fill="rgba(235,235,235,0.14)"
        />
        <path
          d="M330,118 L380,142 L356,144 Z"
          fill="rgba(230,230,230,0.12)"
        />
        <path
          d="M0,158 C200,138 360,174 520,144 C700,110 880,160 1200,132"
          fill="none"
          stroke="rgba(235,235,235,0.14)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Lighting */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-black/10 via-black/0 to-black/20"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.32) 100%)",
        }}
      />
    </>
  );
}
