import type { ReactNode } from "react";

type ComponentPreviewProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

export function ComponentPreview({
  children,
  label = "Preview",
  className = "",
}: ComponentPreviewProps) {
  return (
    <section className={`component-preview ${className}`.trim()}>
      <div className="component-preview__label">{label}</div>
      <div className="component-preview__canvas">{children}</div>
    </section>
  );
}
