import { LabelProps } from "@type";
import { cn } from "@utils";

export const Label = ({
  children,
  htmlFor,
  disabled,
  className,
  required,
  forwardedRef,
}: LabelProps) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        ref={forwardedRef}
        className={cn(disabled && "cursor-not-allowed", className)}
      >
        
        {children}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
    </>
  );
};
