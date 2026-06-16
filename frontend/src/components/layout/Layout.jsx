import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TopBar from "./TopBar";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { pageTransition } from "../../utils/animations";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream font-body">
      <ScrollToTop />
      <TopBar />
      <AnnouncementBar />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
