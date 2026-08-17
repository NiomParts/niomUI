import { useCallback, useMemo, useState } from "react";
import type {
  ToastOptions,
  ToastProviderProps,
  ToastState,
} from "@type/components";

import { TOASTER_CLASSNAMES } from "../constant/Toaster.constants";
import { Toaster } from "../component/Toaster";
import { createContext } from "react";
import type { ToastContextValue } from "@type/components";

export const ToastContext = createContext<ToastContextValue | null>(null);

const createToastId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

export function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  const showToast = useCallback((toastOptions: ToastOptions) => {
    const id = createToastId();

    setToast({
      ...toastOptions,
      id,
    });

    return id;
  }, []);

  const contextValue = useMemo(
    () => ({
      toast,
      showToast,
      dismissToast,
    }),
    [dismissToast, showToast, toast],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toast ? (
        <div className={TOASTER_CLASSNAMES.viewport}>
          <Toaster
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            autoCloseMs={toast.autoCloseMs}
            onClose={dismissToast}
          />
        </div>
      ) : null}
    </ToastContext.Provider>
  );
}
