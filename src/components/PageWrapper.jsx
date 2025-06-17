import { useEffect } from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68516dfd75bff4190dddbd45/1itv1bacu";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Optional cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
