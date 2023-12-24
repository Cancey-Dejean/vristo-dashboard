'use client';
import { useState } from 'react';
import IconX from '../icon/icon-x';
import { cn } from '@/libs/utils';

type AlertProps = {
    className?: string;
    variant?: 'primary-light' | 'primary-solid' | 'primary-outline';
};

export default function Alert({ className, variant }: AlertProps) {
    const [alertVisible, setAlertVisible] = useState(true);

    const handleCloseAlert = () => {
        setAlertVisible(false);
    };

    return (
        <div
            className={cn('alert flex items-center gap-[14px] p-3.5 rounded', className, {
                hidden: !alertVisible,
                'text-primary bg-primary-light dark:bg-primary-dark-light': variant === 'primary-light',
                'text-white bg-primary': variant === 'primary-solid',
                'text-white-dark border border-primary': variant === 'primary-outline',
            })}
        >
            <p className="ltr:pr-2 rtl:pl-2 text-[14px]">
                <strong className="ltr:mr-1 rtl:ml-1">Primary!</strong> Lorem Ipsum is simply dummy text of the printing.
            </p>

            <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80" onClick={handleCloseAlert} aria-label="Close Alert box">
                <IconX />
            </button>
        </div>
    );
}
