import React from 'react';
import MedicalNetwork from './MedicalNetwork';

const WhyDiagNXT = () => {
    return (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                            Why <br />
                            DiagNXT. <br />
                            Why Now.
                        </h2>

                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                            We are building India's first clinically safe, workflow-native AI co-pilot
                            designed for real-world constraints: high patient load, limited time and
                            rising medico-legal complexity.
                        </p>

                        <p className="text-lg lg:text-xl font-semibold text-blue-600 leading-relaxed">
                            A global problem, starting with India—the world's most demanding
                            healthcare environment.
                        </p>

                        <div className="p-6 rounded-xl bg-slate-100 border border-slate-200">
                            <p className="text-lg font-bold text-slate-900 text-center">
                                AI that scales quality, not workload
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                        <MedicalNetwork />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyDiagNXT;
