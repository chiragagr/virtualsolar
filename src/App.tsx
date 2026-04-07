/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Calculator } from './pages/Calculator';
import { HowItWorks } from './pages/HowItWorks';
import { HousingSocieties } from './pages/HousingSocieties';
import { Businesses } from './pages/Businesses';
import { About } from './pages/About';
import { Signup } from './pages/Signup';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Admin } from './pages/Admin';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
