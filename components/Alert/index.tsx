'use client';
import { useState } from 'react';
import IconX from '../icon/icon-x';
import { cn } from '@/libs/utils';
import IconBellBing from '../icon/icon-bell-bing';
import IconSettings from '../icon/icon-settings';

type AlertProps = {
    /**
     * Description goes here
     */
    className?: string;
    /**
     * Description goes here
     */
    variant?:
        | 'primary-solid'
        | 'secondary-solid'
        | 'success-solid'
        | 'warning-solid'
        | 'danger-solid'
        | 'info-solid'
        | 'primary-light'
        | 'secondary-light'
        | 'success-light'
        | 'warning-light'
        | 'danger-light'
        | 'info-light'
        | 'primary-outline'
        | 'secondary-outline'
        | 'success-outline'
        | 'warning-outline'
        | 'danger-outline'
        | 'info-outline';
    /**
     * Description goes here
     */
    alertIcon?: boolean | React.ReactNode;
    /**
     * Description goes here
     */
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
                // Solids
                'text-white bg-primary': variant === 'primary-solid',
                'text-white bg-secondary': variant === 'secondary-solid',
                'text-white bg-success': variant === 'success-solid',
                'text-white bg-warning': variant === 'warning-solid',
                'text-white bg-danger': variant === 'danger-solid',
                'text-white bg-info': variant === 'info-solid',
                // End of Solids

                // Lights
                'text-primary bg-primary-light dark:bg-primary-dark-light': variant === 'primary-light',
                'text-secondary bg-secondary-light dark:bg-secondary-dark-light': variant === 'secondary-light',
                'text-success bg-success-light dark:bg-success-dark-light': variant === 'success-light',
                'text-warning bg-warning-light dark:bg-warning-dark-light': variant === 'warning-light',
                'text-danger bg-danger-light dark:bg-danger-dark-light': variant === 'danger-light',
                'text-info bg-info-light dark:bg-info-dark-light': variant === 'info-light',
                // End of Lights

                // Outlines
                'border-primary': variant === 'primary-outline',
                'border-secondary': variant === 'secondary-outline',
                'border-success': variant === 'success-outline',
                'border-warning': variant === 'warning-outline',
                'border-danger': variant === 'danger-outline',
                'border-info': variant === 'info-outline',
                // End of Outlines
            })}
        >
            {alertIcon ? (
                <div
                    className={cn('alert-icon flex w-16 items-center justify-center text-white [&_svg]:w-6', {
                        // Icon Light
                        'bg-primary': variant === 'primary-light',
                        'bg-secondary': variant === 'secondary-light',
                        'bg-success': variant === 'success-light',
                        'bg-warning': variant === 'warning-light',
                        'bg-danger': variant === 'danger-light',
                        'bg-info': variant === 'info-light',
                        // End of Icon Light
                    })}
                >
                    {alertIcon === true ? alertIcon : <IconSettings />}
                </div>
            ) : null}

            <div className="flex items-center w-full justify-between p-3.5 gap-[14px]">
                <p className="text-[14px] font-light">
                    <strong className="font-bold">Primary!</strong> Lorem Ipsum is simply dummy text of the printing.
                </p>

                {customButton ? customButton : null}

                <button type="button" className="hover:opacity-80" onClick={handleCloseAlert} aria-label="Close Alert box">
                    <IconX className="h-[20px]" />
                </button>
            </div>
        </div>
    );
}
