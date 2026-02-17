import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TargetViewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.adobe?.target) {
      window.adobe.target.triggerView(location.pathname);
      console.log("Target view triggered:", location.pathname);
    }
  }, [location]);

  return null;
}

export default TargetViewTracker;
