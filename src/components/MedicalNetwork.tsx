import React from 'react';
import { Database, Share2, ShieldCheck, Server, Globe } from 'lucide-react';

const MedicalNetwork = () => {
    return (
        <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    {/* Core Glow */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full" />

                    {/* Central Node */}
                    <div className="relative z-10 w-20 h-20 bg-slate-900 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <Database className="w-8 h-8 text-blue-400" />
                    </div>

                    {/* Orbiting Rings */}
                    <div className="absolute inset-[-16px] border border-blue-500/20 rounded-full border-dashed" />
                    <div className="absolute inset-[-32px] border border-blue-500/10 rounded-full border-dashed" />
                </div>
            </div>

            {/* Satellite Nodes */}
            {[
                { icon: Share2, color: "text-green-400", border: "border-green-500/30", x: "30%", y: "-30%" },
                { icon: ShieldCheck, color: "text-yellow-400", border: "border-yellow-500/30", x: "-35%", y: "20%" },
                { icon: Server, color: "text-purple-400", border: "border-purple-500/30", x: "35%", y: "35%" },
                { icon: Globe, color: "text-cyan-400", border: "border-cyan-500/30", x: "-30%", y: "-35%" },
            ].map((node, i) => (
                <div
                    key={i}
                    className={`absolute top-1/2 left-1/2 w-10 h-10 bg-slate-800 rounded-lg border ${node.border} flex items-center justify-center z-10`}
                    style={{ transform: `translate(calc(-50% + ${node.x}), calc(-50% + ${node.y}))` }}
                >
                    <node.icon className={`w-5 h-5 ${node.color}`} />
                </div>
            ))}
        </div>
    );
};

export default MedicalNetwork;
