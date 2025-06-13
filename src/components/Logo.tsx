import Image from "next/image";
import clsx from 'clsx';
import { poiret } from "@/app/layout";

export function Logo({ className = '' }: { className?: string }) {
    return (
        <div className={clsx('flex flex-col items-center', className)}>
            <Image
                className="dark:invert"
                src="/villa-icon.svg"
                alt="Villa Amarilla icon"
                width={120}
                height={120}
                priority
            />
            <span
                className={clsx(
                    'flex flex-row items-center justify-center text-[2.2rem] leading-none',
                    poiret.variable
                )}
                style={{ fontFamily: 'var(--font-poiret)' }}
            >
                VILLA*<strong>AMARILLA</strong>
            </span>
        </div>
    );
} 