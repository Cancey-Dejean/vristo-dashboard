import { cva } from 'class-variance-authority';
import { cn } from '@/libs/utils';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const badge = cva('flex items-center  border border-transparent justify-between text-xs font-medium', {
    variants: {
        variant: {
            'primary-flat': 'bg-blue-200 text-blue-900',
            'primary-border': 'border-blue-900 text-blue-900',
            'secondary-flat': 'bg-violet-200 text-violet-900',
            'secondary-border': 'border-violet-900 text-violet-900',
            'success-flat': 'bg-green-200 text-green-900',
            'success-border': 'border-green-900 text-green-900',
            'warning-flat': 'bg-yellow-200 text-yellow-900',
            'warning-border': 'border-yellow-900 text-yellow-900',
            'danger-flat': 'bg-red-200 text-red-900',
            'danger-border': 'border-red-900 text-red-900',
            'info-flat': 'bg-gray-200 text-gray-900',
            'info-border': 'border-gray-900 text-gray-900',
        },
        size: {
            small: 'px-1.5 py-0.5',
            medium: 'px-2 py-1',
        },
        badgeEdge: {
            default: 'rounded-md',
            pill: 'rounded-full',
        },
    },
    defaultVariants: {
        variant: 'primary-flat',
        size: 'small',
    },
});

export type BadgesProps = {
    /**
     * Description goes here
     */
    variant?: 'primary-flat' | 'primary-border' | 'secondary-flat' | 'secondary-border' | 'success-flat' | 'success-border' | 'warning-flat' | 'warning-border' | 'danger-flat' | 'danger-border';
    /**
     * Description goes here
     */
    size: 'small' | 'medium';
    /**
     * Description goes here
     */
    badgeEdge: 'default' | 'pill';
    /**
     * Description goes here
     */
    text: string;
    /**
     * Description goes here
     */
    closeBagde: boolean;
};

const Badges = ({ variant, size, badgeEdge, closeBagde, text }: BadgesProps) => {
    const [badgeVisible, setBadgeVisible] = useState<boolean>(true);

    const handleCloseBadge = () => {
        setBadgeVisible(false);
    };

    return (
        <>
            <div
                className={cn(badge({ variant, size, badgeEdge }), {
                    hidden: !badgeVisible,
                })}
            >
                <span className="px-1">{text || 'Badge'}</span>

                {closeBagde ? (
                    <button role="button" className="flex items-center h-full justify-end" onClick={handleCloseBadge} aria-label="Remove Badge">
                        <IoCloseOutline className="size-3.5" />
                    </button>
                ) : null}
            </div>
        </>
    );
};

export default Badges;
