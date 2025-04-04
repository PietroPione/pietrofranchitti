"use client";

import React from "react";

export default function WortkSchool({ workSchool }) {
    const { primary } = workSchool;

    return (
        <div className="h-screen relative container">
            <h2 className="text-60 font-bold py-8 sticky top-0 bg-white z-10">{primary.title}</h2>
            <div className="flex flex-col md:flex-row gap-x-20">
                {/* Colonna Lavoro */}
                <div className="w-full md:w-1/3 p-4 md:sticky top-24 h-screen overflow-y-auto contain-paint">
                    <h3 className="text-32 font-semibold mb-4">{primary.work_title}</h3>
                    <p className="mb-4 italic">{primary.work_copy}</p>
                    {primary.works.map((work, index) => (
                        <div key={index} className="mb-4">
                            <p
                                className={`font-medium ${work.attuale ? "animate-pulse text-26" : "text-22"}`}
                            >
                                {work.work_position}
                            </p>
                            <p>{work.dove}</p>
                            <p>{work.periodo} {work.attuale && '- Attuale'}</p>
                        </div>
                    ))}
                </div>

                {/* Colonna Studi */}
                <div className="w-full md:w-1/3 p-4 md:sticky top-24 h-screen overflow-y-auto contain-paint">
                    <h3 className="text-32 font-semibold mb-4">{primary.study_title}</h3>
                    <p className="mb-4 italic">{primary.study_copy}</p>
                    {primary.studies.map((study, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-medium text-22">{study.nome_corso}</p>
                            <p>{study.dove}</p>
                            <p>{study.periodo}</p>
                        </div>
                    ))}
                </div>

                {/* Colonna Certificazioni */}
                <div className="w-full md:w-1/3 p-4 md:sticky top-24 h-screen overflow-y-auto contain-paint">
                    <h3 className="text-32 font-semibold mb-4">{primary.titolo_certificazioni}</h3>
                    <p className="mb-4 italic">{primary.copy_certificazioni}</p>
                    {primary.certificazioni.map((certificazione, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-medium text-22">{certificazione.nome_certificazione}</p>
                            <p>{certificazione.dove}</p>
                            <p>{certificazione.quando}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}