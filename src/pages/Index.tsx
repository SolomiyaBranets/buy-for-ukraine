import { useEffect, useState } from "react";
import doveImage from "@/assets/dove.png";

const Index = () => {
  const [showAction, setShowAction] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAction(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Warm glow effect */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsla(50, 100%, 85%, 0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col md:flex-row items-center min-h-screen max-w-6xl mx-auto px-8 md:px-16 py-16 gap-8">
        {/* Text content */}
        <div className="flex-1 z-10">
          <h1
            className="text-5xl md:text-7xl font-medium leading-tight mb-8 text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Buy for Ukraine
          </h1>

          <div
            className="space-y-5 text-lg md:text-xl leading-relaxed max-w-[520px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <p>
              Four years have passed since this project began. Over that time,
              the information we gathered about brands donating their profits to
              Ukraine has inevitably aged. Companies change their policies, new
              ones emerge, others quietly step back.
            </p>

            <p>
              We can no longer verify which brands still hold true to those
              commitments, and so <em>Buy for Ukraine</em> can no longer be
              actively maintained.
            </p>

            <p
              className="transition-opacity duration-1000"
              style={{ opacity: showAction ? 1 : 0 }}
            >
              If you would like the original spreadsheet of brands, write to{" "}
              <a
                href="mailto:buy.for.ua@gmail.com"
                className="text-foreground underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors"
              >
                buy.for.ua@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Dove image */}
        <div className="flex-1 flex justify-end items-center">
          <img
            src={doveImage}
            alt="Peace dove illustration with olive branch"
            className="w-full max-w-md md:max-w-lg rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
