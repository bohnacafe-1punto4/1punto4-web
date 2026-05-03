/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from './components/Navigation';
import { OriginSection } from './components/Origin';
import { ProductsSection } from './components/Products';
import { ContactSection, Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-brand-purple/30 selection:text-brand-purple">
      <Navbar />
      <main>
        <Hero />
        <OriginSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
