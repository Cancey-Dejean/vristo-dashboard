'use client';
import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import { cn } from '@/libs/utils';
import IconSettings from '../icon/icon-settings';

type AlertProps = {
    /**
     * Description goes here
     */
    className?: string;
    /**
     * Description goes here
     */
    text?: React.ReactNode;
    /**
     * Description goes here
     */
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

    /**
     * Description goes here
     */
    alertIcon?: boolean | React.ReactNode;
};

export default function Alert({ className, variant, alertIcon, text }: AlertProps) {
    const [alertVisible, setAlertVisible] = useState<boolean>(true);

    const handleCloseAlert = () => {
        setAlertVisible(false);
    };

    return (
        <div
            className={cn('flex items-stetch rounded text-white-dark overflow-hidden shadow-lg', className, {
                hidden: !alertVisible,

                'text-blue-900 bg-blue-200 dark:text-blue-100 dark:bg-slate-900': variant === 'primary',
                'text-violet-900 bg-violet-200 dark:bg-violet-900 dark:text-violet-200': variant === 'secondary',
                'text-green-900 bg-green-200 dark:bg-green-900 dark:text-green-200': variant === 'success',
                'text-yellow-900 bg-yellow-200  dark:bg-yellow-900 dark:text-yellow-200': variant === 'warning',
                'text-red-900 bg-red-200 dark:bg-red-900 dark:text-red-200': variant === 'danger',
                'text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200': variant === 'info',
            })}
        >
            {alertIcon ? (
                <div
                    className={cn('alert-icon flex w-12 items-center justify-center [&_svg]:size-6', {
                        'bg-blue-900 text-blue-200 dark:bg-slate-900': variant === 'primary',
                        'bg-violet-900 text-violet-200': variant === 'secondary',
                        'bg-green-900 text-green-200 ': variant === 'success',
                        'bg-yellow-900 text-yellow-200 ': variant === 'warning',
                        'bg-red-900 text-red-200': variant === 'danger',
                        'bg-gray-700 text-gray-200': variant === 'info',
                    })}
                >
                    {alertIcon === true ? alertIcon : <IconSettings />}
                </div>
            ) : null}

            <div className="flex items-center w-full justify-between">
                <div className="text-sm md:text-base p-3.5 dark:pl-0">{text || <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, adipisci!</p>}</div>

                <button type="button" className="w-10 h-full flex items-center justify-center shrink-0 hover:opacity-80" onClick={handleCloseAlert} aria-label="Close Alert box">
                    <IoCloseOutline className="size-5" />
                </button>
            </div>
        </div>
    );
}
