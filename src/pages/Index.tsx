import { useEffect, useState } from "react";

const Index = () => {
  const [showAction, setShowAction] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAction(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <article className="max-w-[55ch]">
        <h1
          className="text-4xl md:text-5xl font-medium leading-tight mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Buy for Ukraine
        </h1>

        <div className="space-y-5 text-lg leading-relaxed text-foreground/85" style={{ fontFamily: "var(--font-sans)" }}>
          <p>
            Four years have passed since this project began — four years of
            change, resilience, and an ongoing struggle that continues to this
            day.
          </p>

          <p>
            Over that time, the information we gathered about brands donating
            part of their profits to Ukraine has inevitably aged. Companies
            change their policies, new ones emerge, others quietly step back. We
            can no longer verify which brands still hold true to those
            commitments, and publishing outdated information would do more harm
            than good.
          </p>

          <p>
            For this reason, <em>Buy for Ukraine</em> can no longer be actively
            maintained or updated. This page now serves as a quiet record of
            what was once a living effort — and a thank you to everyone who
            participated, shared, and cared.
          </p>

          <p
            className="transition-opacity duration-1000"
            style={{ opacity: showAction ? 1 : 0 }}
          >
            If you would still like access to the original spreadsheet of
            brands, you are welcome to write to{" "}
            <a
              href="mailto:buy.for.ua@gmail.com"
              className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              buy.for.ua@gmail.com
            </a>
            , and we will gladly share it with you.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Index;
