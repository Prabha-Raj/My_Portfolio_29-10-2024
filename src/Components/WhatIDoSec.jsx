import "./styles/Card.css";

export default function Card() {
    return (
        <div id="WhatIDo" className="bg-slate-50">
        <div className="whatido_heading text-center  p-5">
            <p><span className="bg-yellow-400 px-1">What i Do?</span></p>
            <p className="text-4xl max-md:text-2xl max-md:px-3 font-bold text-gray-800 ">How I can help your next project</p>
        </div>
        <div className="card-wrapper max-md:flex-col  max-md:p-0">
            <div className="card max-md:p-0 max-md:w-screen">
                <i className="ri-cast-line"></i>
                <h1>Business Stratagy</h1>
                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
            <div className="card">
                <i className="ri-stack-line"></i>
                <h1>Website Development</h1>
                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
            <div className="card">
                <i className="ri-group-line"></i>
                <h1>Marketing & Reporting</h1>
                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
        </div>
        <div className="card-wrapper max-md:flex-col max-md:p-0">
            <div className="card max-md:p-0 max-md:w-screen">
                <i className="ri-cast-line"></i>
                <h1>Business Stratagy</h1>
                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
            <div className="card">
                <i className="ri-stack-line"></i>
                <h1>Website Development</h1>
                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
            <div className="card">
                <i className="ri-group-line"></i>
                <h1>Marketing & Reporting</h1>
                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
        </div>
        </div>
    );
}

