// SezioneBio.jsx
"use client";

import FalsaBio from "./FalsaBio";
import BarraHonest from "./BarraHonest";
import VeraBio from "./VeraBio";
import CosePiacciono from "./CosePiacciono";
import CoseNonPiacciono from "./CoseNonPiacciono";

export default function SezioneBio({ bioSlice, bio, fotofalsabuona, fotofalsacattiva, testoHonest, bioVeraText, fotoBioVera, cosePiacciono, coseNonPiacciono }) {
    return (
        <>
            {bioSlice && bio && fotofalsabuona && (
                <FalsaBio bio={bio} fotofalsabuona={fotofalsabuona} fotofalsacattiva={fotofalsacattiva} />
            )}

            {testoHonest && <BarraHonest testoHonest={testoHonest} />}

            {bioVeraText && (
                <VeraBio bioVeraText={bioVeraText} fotoBioVera={fotoBioVera} />
            )}
            {cosePiacciono && coseNonPiacciono && (<div className="space-y-20 pb-20">

                {cosePiacciono && <CosePiacciono cosePiacciono={cosePiacciono} />}
                {coseNonPiacciono && <CoseNonPiacciono coseNonPiacciono={coseNonPiacciono} />}
            </div>)}
        </>
    );
}