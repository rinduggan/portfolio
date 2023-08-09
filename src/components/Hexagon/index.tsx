'use client'
import Image from "next/image";
import hexagonLeft from '../../../public/hexagonLeft.svg'
import hexagonRight from '../../../public/hexagonRight.svg'
import hexagon from '../../../public/hexagon.svg'

export default function Hexagon({ side }: { side?: string }) {
    return (
        side ? (
            <div className={`fixed ${side === "left" ? "top-1/3 md:top-1/2" : "right-0 md:top-15"}`}>
                <Image 
                    src={side === "left" ? hexagonLeft : hexagonRight}
                    alt=""
                />
            </div>
        ) : (
            <div>
                <div
                   className="fixed"
                >
                    <Image 
                        src={hexagon}
                        alt=""
                    />
                </div>
                <div>
                    <Image 
                        src={hexagon}
                        alt=""
                    />
                </div>
            </div>
        )
    )
}