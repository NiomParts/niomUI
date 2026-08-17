import { ImageProps } from "@type";
import { cn } from "@utils";
import { OBJECT_FIT } from "./Image.constants";

export const Image = ({
  src,
  alt,
  className,
  fallbackSrc,
  loading = "lazy",
  objectFit = "cover",
  aspectRatio,
  width,
  height,
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ aspectRatio }}
      className={cn("block max-w-full", OBJECT_FIT[objectFit], className)}
      loading={loading}
      onError={(e) => {
        if (!fallbackSrc) return;

        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackSrc;
      }}
    />
  );
};
