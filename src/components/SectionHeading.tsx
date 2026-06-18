import { forwardRef } from "react";

interface SectionHeadingProps {
  primary: React.ReactNode;
  italic: string;
  className?: string;
}

const SectionHeading = forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  function SectionHeading({ primary, italic, className = "" }, ref) {
    return (
      <h2
        ref={ref}
        className={`font-headline-lg text-3xl lg:text-5xl text-on-background font-extrabold tracking-tight ${className}`}
      >
        {primary}{' '}
        <span className="text-on-background/40 font-cormorant italic text-[2.2rem] lg:text-[3.5rem] tracking-wider font-semibold ml-[0.4rem]">
          {italic}
        </span>
      </h2>
    );
  }
);

export default SectionHeading;
