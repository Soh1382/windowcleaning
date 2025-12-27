import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PublicLayout } from './layouts/PublicLayout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ServicesIndex from './pages/ServicesIndex';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import About from './pages/About';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import { DashboardLayout } from './layouts/DashboardLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminJobs from './pages/admin/Jobs';
import CustomerDashboard, { CUSTOMER_NAV } from './pages/customer/Dashboard';

const queryClient = new QueryClient();

// Placeholders


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />

          </Route>
          
          <Route path="/dashboard/*" element={
            <DashboardLayout>
               <Routes>
                 <Route index element={<Dashboard />} />
                 <Route path="jobs" element={<AdminJobs />} />
                 <Route path="*" element={<Navigate to="/dashboard" replace />} />
               </Routes>
            </DashboardLayout>
          } />

          <Route path="/portal/*" element={
            <DashboardLayout title="Customer Portal" navItems={CUSTOMER_NAV}>
               <Routes>
                 <Route index element={<CustomerDashboard />} />
                 <Route path="*" element={<Navigate to="/portal" replace />} />
               </Routes>
            </DashboardLayout>
          } />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
