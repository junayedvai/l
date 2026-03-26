import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CmsProvider } from "./contexts/CmsContext";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import IELTS from "./pages/IELTS";
import Japanese from "./pages/Japanese";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import NoticeBoard from "./pages/NoticeBoard";
import WhatsAppButton from "./components/WhatsAppButton";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/ielts"} component={IELTS} />
      <Route path={"/japanese"} component={Japanese} />
      <Route path={"/success-stories"} component={SuccessStories} />
      <Route path={"/destinations"} component={Destinations} />
      <Route path={"/notice-board"} component={NoticeBoard} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CmsProvider>
          <TooltipProvider>
            <Toaster />
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </TooltipProvider>
        </CmsProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
