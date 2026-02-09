import React from 'react';

const Metrics = () => {
    const metrics = [
        {
            value: "60-80",
            unit: "Hours",
            label: "Saved Monthly"
        },
        {
            value: "50-70%",
            unit: "Risk",
            label: "Reduction"
        },
        {
            value: "100%",
            unit: "Coverage",
            label: "Nothing Missed"
        }
    ];

    return (
        <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-900 tracking-tight">Why Doctors Choose DiagNXT</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="card-elevated p-8 lg:p-10 rounded-xl text-center">
                            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-2">
                                {metric.value}
                            </div>
                            <div className="text-lg lg:text-xl text-blue-600 font-medium mb-1">{metric.unit}</div>
                            <div className="text-slate-600">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
