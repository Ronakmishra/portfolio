// "use client";

// import { useEffect } from "react";

// export default function BackgroundNetwork() {
//   useEffect(() => {
//     // Wait for particles.js to be available on window
//     const loadParticles = async () => {
//       if (typeof window !== "undefined") {
//         const particlesJS = (window as any).particlesJS;
//         if (particlesJS) {
//           particlesJS.load("particles-js", "/particles-config.json", () => {
//             console.log("🟢 particles.js config loaded");
//           });
//         }
//       }
//     };

//     loadParticles();
//   }, []);

//   return (
//     <div className="fixed inset-0 -z-10">
//       {/* Particles Canvas */}
//       <div
//         id="particles-js"
//         className="absolute inset-0"
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//       />

//       {/* Removed radial gradient */}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

// export default function BackgroundNetwork() {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // Prevent SSR mismatch issues
//   useEffect(() => {
//     setMounted(true);

//     const loadParticles = async () => {
//       if (typeof window !== "undefined") {
//         const particlesJS = (window as any).particlesJS;
//         if (particlesJS) {
//           particlesJS.load("particles-js", "/particles-config.json", () => {
//             console.log("🟢 particles.js config loaded");
//           });
//         }
//       }
//     };

//     loadParticles();
//   }, []);

//   if (!mounted) return null; // avoid rendering until client-side

//   return (
//     <div className="fixed inset-0 -z-10">
//       {/* Particles Canvas */}
//       <div
//         id="particles-js"
//         className="absolute inset-0"
//         style={{ width: "100%", height: "100%" }}
//       />

//       {/* Theme-based Radial Gradient Overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             theme === "dark"
//               ? "radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0) 60%)"
//               : "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0) 60%)",
//         }}
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function BackgroundNetwork() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load particles when theme changes
  useEffect(() => {
    if (!mounted) return;

    const particlesJS = (window as any).particlesJS;
    const configFile =
      theme === "dark" ? "/particles-dark.json" : "/particles-light.json";

    if (particlesJS) {
      particlesJS.load("particles-js", configFile, () => {
        console.log(`🟢 Loaded ${configFile}`);
      });
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[40vh] md:inset-0 md:h-full -z-10">
      {/* Particles Canvas */}
      <div
        id="particles-js"
        className="absolute inset-0 w-full h-full"
      />

      {/* Theme-based Radial Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0) 60%)"
              : "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0) 60%)",
        }}
      />
    </div>
  );
}
