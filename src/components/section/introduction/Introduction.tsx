interface IntroductionProps {
    name: string;
    position: string;
    src: string;
}

export function Introduction({ name, position, src }: IntroductionProps) {
    return (
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
            <div className="max-w-[60ch] flex-1 text-center leading-loose md:text-left">
                <h1>
                    Olá, meu nome é
                    <span className="block font-sans text-7xl font-bold capitalize">{name}</span>
                </h1>
                <p className="font-tt-regular text-4xl">
                    Sou <span className="lowercase">{position}</span> na DBServer
                </p>
            </div>
            <div className="flex flex-1 justify-center">
                <div className="border-primary aspect-square w-full overflow-hidden rounded-full border-8 shadow-lg md:max-w-sm">
                    <img src={src} alt={name} />
                </div>
            </div>
        </div>
    );
}
