import { useEffect } from "react";

const ZohoSalesIQ = () => {
  useEffect(() => {
    // Paste your Zoho SalesIQ widget code here
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "zsiqscript";
    script.defer = true;
    script.src = "https://salesiq.zohopublic.com/widget";

    const existingScript = document.getElementById("zsiqscript");
    if (existingScript) {
      existingScript.remove();
    }

    document.body.appendChild(script);

    return () => {
      // Cleanup if the component is unmounted
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // The component doesn't render anything
};

export default ZohoSalesIQ;
