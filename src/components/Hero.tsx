import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import ClinicalDashboard from './ClinicalDashboard';

const Hero = () => {
    return (
        <section className="relative py-16 lg:py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium">
                            <Activity className="w-4 h-4" />
                            <span>Next Gen Clinical Intelligence</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
                            DiagNXT:<br />
                            <span className="text-blue-600">Clinical AI Co-Pilot</span><br />
                            for Doctors
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
                            Improving speed, safety, and standardization in clinical decision-making for high-pressure healthcare systems worldwide.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdc9tJ1CDV6kMmCAHz2bEH_G3QIQAxIsrNIR_11bZkP6SvEvQ/viewform?usp=publish-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                            >
                                Request Demo
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="relative h-[500px]">
                        <ClinicalDashboard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
