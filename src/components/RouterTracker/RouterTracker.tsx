import { useActivityStore } from "@/store/recentActivity";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function RouteTracker() {
  const location = useLocation();
  const addActivity = useActivityStore((s) => s.addActivity);

  useEffect(() => {
    addActivity(location.pathname);
  }, [location.pathname, addActivity]);

  return null;
}
