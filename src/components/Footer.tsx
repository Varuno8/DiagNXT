import React from 'react';
import { Activity } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                            <Activity className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-slate-900">DiagNXT</span>
                    </div>

                    <p className="text-slate-600 text-center md:text-right max-w-md text-sm leading-relaxed">
                        We are building India's first clinically safe, workflow-native AI co-pilot designed for real-world constraints. AI that scales quality, not workload.
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
                    DiagNXT © 2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
