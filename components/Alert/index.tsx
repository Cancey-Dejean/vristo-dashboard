'use client';
import { useState } from 'react';
import IconX from '../icon/icon-x';
import { cn } from '@/libs/utils';
import IconBellBing from '../icon/icon-bell-bing';
import IconSettings from '../icon/icon-settings';

type AlertProps = {
    className?: string;
    variant?: 'primary-light' | 'primary-solid' | 'primary-outline' | 'secondary-light' | 'success-light' | 'warning-light' | 'danger-light' | 'info-light' | 'danger-outline';
    alertIcon?: React.ReactNode;
    customButton?: React.ReactNode;
};

export default function Alert({ className, variant, alertIcon, customButton }: AlertProps) {
    const [alertVisible, setAlertVisible] = useState(true);

    const handleCloseAlert = () => {
        setAlertVisible(false);
    };

    return (
        <div
            className={cn('flex items-stetch rounded border text-white-dark overflow-hidden', className, {
                hidden: !alertVisible,
                'text-primary bg-primary-light dark:bg-primary-dark-light': variant === 'primary-light',
                'text-secondary bg-secondary-light dark:bg-secondary-dark-light': variant === 'secondary-light',
                'text-success bg-success-light dark:bg-success-dark-light': variant === 'success-light',
                'text-warning bg-warning-light dark:bg-warning-dark-light': variant === 'warning-light',
                'text-danger bg-danger-light dark:bg-danger-dark-light': variant === 'danger-light',
                'text-info bg-info-light dark:bg-info-dark-light': variant === 'info-light',
                'text-white bg-primary': variant === 'primary-solid',
                'border-primary': variant === 'primary-outline',
                'border-danger': variant === 'danger-outline',
            })}
        >
            {alertIcon ? (
                <div
                    className={cn('alert-icon flex w-16 items-center justify-center', {
                        'bg-primary': variant === 'primary-light',
                        'text-white': variant === 'primary-solid',
                        'text-white-dark': variant === 'primary-outline',
                    })}
                >
                    {variant === 'primary-light' ? <IconBellBing className="w-6 text-white" /> : null}
                    {variant === 'primary-solid' ? <IconSettings className="w-6 text-white" /> : null}
                    {variant === 'primary-outline' ? <IconX className="w-6 text-white" /> : null}
                </div>
            ) : null}

            <div className="flex items-center w-full justify-between p-3.5 gap-[14px]">
                <p className="text-[14px]">
                    <strong>Primary!</strong> Lorem Ipsum is simply dummy text of the printing.
                </p>

                {customButton ? <div>CTA Button</div> : null}

                <button type="button" className="hover:opacity-80" onClick={handleCloseAlert} aria-label="Close Alert box">
                    <IconX className="h-[20px]" />
                </button>
            </div>
        </div>
    );
}
