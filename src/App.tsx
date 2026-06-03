import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Calculator = lazy(() => import('./pages/Calculator').then(m => ({ default: m.Calculator })));
const HowItWorks = lazy(() => import('./pages/HowItWorks').then(m => ({ default: m.HowItWorks })));
const HousingSocieties = lazy(() => import('./pages/HousingSocieties').then(m => ({ default: m.HousingSocieties })));
const Businesses = lazy(() => import('./pages/Businesses').then(m => ({ default: m.Businesses })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Signup = lazy(() => import('./pages/Signup').then(m => ({ default: m.Signup })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Admin = lazy(() => import('./pages/Admin').then(m => ({ default: m.Admin })));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-navy-950" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="societies" element={<HousingSocieties />} />
            <Route path="businesses" element={<Businesses />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
