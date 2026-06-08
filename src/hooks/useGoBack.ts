import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Returns a handler that navigates to the actual previous page. When the page
 * was opened directly (no in-app history — location.key is "default"), it
 * falls back to the home route so the control is never a dead end.
 */
export function useGoBack(fallback = "/") {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(() => {
    if (location.key !== "default") {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  }, [navigate, location.key, fallback]);
}
