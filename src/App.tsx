
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import CallForPapers from "./pages/CallForPapers";
import PaperSubmission from "./pages/PaperSubmission";
import QualityPolicies from "./pages/QualityPolicies";
import Committee from "./pages/Committee";
import Registration from "./pages/Registration";
import Publications from "./pages/Publications";
import ConferenceVenue from "./pages/ConferenceVenue";
import Downloads from "./pages/Downloads";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ConferenceBanner from "./components/ConferenceBanner";
import Navbar from "./components/Navbar";
import ImportantDatesModal from "./components/ImportantDatesModal";
import CheckoutForm from './pages/Checkout';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <ConferenceBanner />
          <Navbar />
          <ImportantDatesModal />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/paper-submission" element={<PaperSubmission />} />
              <Route path="/quality-policies" element={<QualityPolicies />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/conference-venue" element={<ConferenceVenue />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
