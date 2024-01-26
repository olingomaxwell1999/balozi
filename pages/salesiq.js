import { useEffect } from "react";

const ZohoSalesIQ = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "zsiqscript";
    script.defer = true;
    script.innerHTML = `
      var $zoho=$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {widgetcode: "siq7dadedad7e9232f65f7edbdf62dd18b68d5c5b32ff2bf0dc7363898d65f29eb4fa9085690e717b75cdc9f364ef853d37", values:{},ready:function(){}};
      var d=document;
      var s=d.createElement("script");
      s.type="text/javascript";
      s.id="zsiqscript";
      s.defer=true;
      s.src="https://salesiq.zohopublic.com/widget";
      var t=d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s,t);
    `;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default ZohoSalesIQ;
