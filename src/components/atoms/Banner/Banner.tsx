import { forwardRef } from "react";
import type { BannerProps } from "./Banner.type";
import { cn } from "@/utils";
import { EFFECTS, POSITIONS, DIMENSIONS } from "@/constant";

export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      id,
      className,
      image,
      imageFit = "cover",
      content,
      textPosition,
      hoverEffect = false,
      shadowOnHover = false,
      innerShadowOnHover = false,
      layerBlurOnHover = false,
      dimensions = "medium",
      alt,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        id={id}
        ref={ref}
        onClick={props.onClick}
        data-testid={id}
        className={cn(
          "relative flex h-48 items-center justify-center overflow-hidden",
          DIMENSIONS[dimensions],
          hoverEffect && EFFECTS.scale,
          shadowOnHover && EFFECTS.shadow,
          className,
        )}
        {...props}
      >
        <img
          src={image}
          alt={alt || "Banner image"}
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            layerBlurOnHover && EFFECTS.blur,
            innerShadowOnHover && EFFECTS.innerShadow,
          )}
          style={{
            backgroundSize: imageFit,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
        <div className={cn(textPosition ? POSITIONS[textPosition] : "") ?? ""}>
          {content}
        </div>
      </section>
    );
  },
);

Banner.displayName = "Banner";
