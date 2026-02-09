import React, { useState, useEffect } from 'react';
import { Activity, Heart, Thermometer, Brain, Scan, FileText } from 'lucide-react';

const ClinicalDashboard = () => {
    const [scanProgress, setScanProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScanProgress((prev) => (prev + 1) % 100);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg flex flex-col">
            {/* Top Bar */}
            <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                    <Activity className="w-3 h-3" />
                    <span>SYSTEM ONLINE</span>
                    <span className="text-green-500">●</span>
                </div>
            </div>

            <div className="flex-1 p-4 grid grid-cols-12 gap-4 bg-slate-50/50">
                {/* Left Panel - Patient Vitals */}
                <div className="col-span-3 space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span className="text-xs font-bold">HEART RATE</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-700">
                            72 <span className="text-xs font-normal text-slate-400">bpm</span>
                        </div>
                        <div className="h-8 mt-2 flex items-end gap-0.5">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-full bg-red-100 rounded-t-sm"
                                    style={{ height: [10, 20, 15, 30, 10][i % 5] + 'px' }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <Thermometer className="w-4 h-4 text-orange-500" />
                            <span className="text-xs font-bold">TEMP</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-700">
                            98.6 <span className="text-xs font-normal text-slate-400">°F</span>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <Activity className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-bold">RESP</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-700">
                            18 <span className="text-xs font-normal text-slate-400">/min</span>
                        </div>
                    </div>
                </div>

                {/* Center Panel - Main Scan/Analysis */}
                <div className="col-span-6 flex flex-col gap-4">
                    <div className="flex-1 bg-slate-900 rounded-lg overflow-hidden relative border border-slate-800">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                        {/* Central Body Scan Visualization */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Scan className="w-32 h-32 text-blue-500/20" />
                        </div>

                        {/* Scanning Line */}
                        <div
                            className="absolute top-0 left-0 w-full h-0.5 bg-blue-500/50"
                            style={{
                                animation: 'scan 3s linear infinite',
                                top: `${scanProgress}%`
                            }}
                        />
                    </div>

                    <div className="h-24 bg-white rounded-lg border border-slate-200 p-3 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                            <Brain className="w-6 h-6 text-slate-900" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                                <span>AI CONFIDENCE</span>
                                <span>98.5%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-slate-900 rounded-full"
                                    style={{ width: '98.5%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Diagnostics */}
                <div className="col-span-3 space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm h-full flex flex-col">
                        <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Differential Diagnosis</div>

                        <div className="space-y-2">
                            {[
                                { name: "Acute Bronchitis", prob: "High", color: "text-red-600", bg: "bg-red-50" },
                                { name: "Pneumonia", prob: "Med", color: "text-yellow-600", bg: "bg-yellow-50" },
                                { name: "URI", prob: "Low", color: "text-green-600", bg: "bg-green-50" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between hover:bg-slate-100 transition-colors"
                                >
                                    <span className="text-xs font-medium text-slate-700">{item.name}</span>
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.bg} ${item.color}`}>
                                        {item.prob}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-slate-900 text-xs font-bold cursor-pointer hover:underline">
                                <FileText className="w-3 h-3" />
                                Generate Report
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { top: 0%; }
                    100% { top: 100%; }
                }
            `}</style>
        </div>
    );
};

export default ClinicalDashboard;
