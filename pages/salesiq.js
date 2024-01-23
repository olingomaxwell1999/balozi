// components/ZohoSalesIQ.js

import { useEffect } from "react";

const ZohoSalesIQ = () => {
  useEffect(() => {
    // Paste your Zoho SalesIQ widget code here
    var $zoho = $zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode:
        "siq7dadedad7e9232f65f7edbdf62dd18b68d5c5b32ff2bf0dc7363898d65f29eb4fa9085690e717b75cdc9f364ef853d37",
      values: {},
      ready: function () {},
    };
    var d = document;
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.id = "zsiqscript";
    s.defer = true;
    s.src = "https://salesiq.zohopublic.com/widget";
    var t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);

    return () => {
      // Cleanup if the component is unmounted
      if (s.parentNode) {
        s.parentNode.removeChild(s);
      }
    };
  }, []);

  return null; // The component doesn't render anything
};

export default ZohoSalesIQ;
