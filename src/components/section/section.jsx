import { cn } from "@/lib/utils";

export default function Section({ children, wrapperClassName, midChild, className, ...props }) {
    return (
        <section className={className}>
            {midChild && midChild}
            <div className={cn(
                "mx-auto container p-6 sm:py-12 md:p-16 lg:p-20 lg:py-16",
                wrapperClassName,
            )} {...props}>
                {children}
            </div>
        </section>
    )
}

export function SectionHeading({ children, className, ...props }) {
    return (
        <div className={cn(
            "mx-auto w-full md:w-3/4 xl:w-2/4 md:text-center",
            className,
        )} {...props}>
            {children}
        </div>
    )
}

export function SectionBody({ children, className, ...props }) {
    return (
        <div className={cn(
            "mt-xl w-full",
            className,
        )} {...props}>
            {children}
        </div>
    )
}

export function SectionProductGrid({ children, className, ...props }) {
    return (
        <div className={cn(
            "mt-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-xs md:gap-base", className
        )} {...props}>
            {children}
        </div>
    )
}
