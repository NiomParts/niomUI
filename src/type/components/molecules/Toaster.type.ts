import type { ReactNode } from "react";

export type ToastVariant = "success" | "error";

export type ToasterProps = {
  message: string;
  variant: ToastVariant;
  onClose?: () => void;
  autoCloseMs?: number;
};

export type ToastOptions = Omit<ToasterProps, "onClose">;

export type ToastState = ToastOptions & {
  id: string;
};

export type ToastContextValue = {
  toast: ToastState | null;
  showToast: (toast: ToastOptions) => string;
  dismissToast: () => void;
};

export type ToastProviderProps = {
  children: ReactNode;
};
