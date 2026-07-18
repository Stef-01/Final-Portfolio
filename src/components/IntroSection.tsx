import { SplitTextReveal } from "./motion/SplitTextReveal";

export function IntroSection() {
    return (
        <section className="relative bg-white flex min-h-[100svh] flex-col items-center justify-center px-6 md:px-10">
            <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
                <SplitTextReveal
                    as="h2"
                    text="I work where health ideas either translate or stall: between the lab, the policy room, the clinic, and the market."
                    className="font-bold tracking-tight leading-[1.05] text-black t-h1"
                    stagger={0.04}
                    duration={0.75}
                />
            </div>
        </section>
    );
}
