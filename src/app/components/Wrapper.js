"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  const pathname = usePathname();

  const hideHeaderAndFooterPaths = ["/login", "/signup"];
  const shouldHideHeaderAndFooter = hideHeaderAndFooterPaths.includes(pathname);

  return (
    <div>
      {!shouldHideHeaderAndFooter && <Header />}
      {children}
      {!shouldHideHeaderAndFooter && <Footer />}
    </div>
  );
};

export default Wrapper;
