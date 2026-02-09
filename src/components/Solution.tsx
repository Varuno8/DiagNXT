import React from 'react';
import { Brain, FileText, CheckCircle2 } from 'lucide-react';

const Solution = () => {
    return (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                        DiagNXT: The <span className="text-blue-600">Clinical Co-Pilot</span> Solution
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
                        A workflow-native AI assistant that augments doctors with intelligent support.
                        <span className="text-blue-600 font-semibold"> Not a chatbot—a clinical safety engine.</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column */}
                    <div className="card-elevated-lg p-8 lg:p-10 rounded-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Decision Support</h3>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Top 5 differentials",
                                "Red-flag alerts",
                                "Missing info prompts",
                                "Guideline-backed reasoning"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Visual Element */}
                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-slate-500 font-medium">Differential Diagnosis</span>
                                <span className="text-xs text-blue-600 font-semibold">High Confidence</span>
                            </div>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-slate-900" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="card-elevated-lg p-8 lg:p-10 rounded-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Documentation Engine</h3>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Automated clinical notes",
                                "Investigation reports",
                                "FHIR/HMIS-ready structured data",
                                "Instant discharge summaries"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Visual Element */}
                        <div className="space-y-2">
                            <div className="h-2 w-3/4 bg-slate-100 rounded" />
                            <div className="h-2 w-full bg-slate-100 rounded" />
                            <div className="h-2 w-5/6 bg-slate-100 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
