import { RevealText } from "./RevealText";

export function IntroSection() {
    return (
        <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 md:px-10">
            <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
                <h2 className="text-balance font-bold leading-[1.05] tracking-[-0.035em] text-gray-900 t-h1">
                    <RevealText
                        text={[
                            { text: "I work on the" },
                            {
                                text: "handoffs",
                                className: "font-['Playfair_Display',_serif] font-semibold italic text-oxblood",
                            },
                            { text: "between the lab, the policy room, the clinic, and the market." },
                        ]}
                    />
                </h2>
            </div>
        </section>
    );
}
