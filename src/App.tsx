import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhyNow from './components/WhyNow';
import Solution from './components/Solution';
import USP from './components/USP';
import HowItWorks from './components/HowItWorks';
import Metrics from './components/Metrics';
import WhyDiagNXT from './components/WhyDiagNXT';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
      <Hero />
      <Problem />
      <WhyNow />
      <Solution />
      <USP />
      <HowItWorks />
      <Metrics />
      <WhyDiagNXT />
      <Footer />
    </main>
  );
}

export default App;
