type LinkButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export function LinkButton({ href, children, className }: LinkButtonProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-tt-bold bg-accent border-accent hover:bg-accent-hover hover:border-primary rounded-md border-2 py-2 text-center text-lg tracking-wide text-white duration-300 ${className ?? ""} `}
        >
            {children}
        </a>
    );
}
