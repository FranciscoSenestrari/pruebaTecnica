import { useActivityStore } from "@/store/recentActivity";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RouteTracker() {
  const location = useLocation();
  const addActivity = useActivityStore((s) => s.addActivity);

  useEffect(() => {
    addActivity(location.pathname);
  }, [location.pathname, addActivity]);

  return null;
}

export default RouteTracker;
