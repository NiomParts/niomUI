import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

type RootProps = {
  children: ReactNode;
};

export default function Root({ children }: RootProps): ReactNode {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      {children}
    </>
  );
}
