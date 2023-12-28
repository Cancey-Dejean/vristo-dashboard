import Image from 'next/image';
import { cva } from 'class-variance-authority';
import { cn } from '@/libs/utils';
import 'tippy.js/dist/tippy.css';
import './Avatar.css';

const avatar = cva('h-auto rounded-full w-auto object-cover ring-2 ring-white text-base flex items-center justify-center gap-2 duration-300 ease-in-out', {
    variants: {
        size: {
            'x-large': 'size-16 lg:size-20 text-2xl',
            large: 'size-14 lg:size-16 text-xl',
            medium: 'size-12 lg:size-14 text-lg',
            small: '!size-12',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

export type AvatarProps = {
    /**
     * Description goes here
     */
    size?: 'small' | 'medium' | 'large' | 'x-large';
    /**
     * Description goes here
     */
    imgSrc: string;
    /**
     * Description goes here
     */
    name: string;
    /**
     * Description goes here
     */
    notification?: boolean;
    /**
     * What background color to use
     */
    notificationColor?: string;
};

const Avatar = ({ imgSrc, name, size, notification, notificationColor }: AvatarProps) => {
    return (
        <div className={cn(avatar({ size }), 'relative')}>
            {imgSrc !== '' ? (
                <Image src={imgSrc || 'https://dummyimage.com/80x80.png/dddddd/ffffff'} alt={name || 'Name'} width={80} height={80} className="rounded-full" />
            ) : (
                <span className={`rounded-full w-full h-full flex items-center justify-center bg-red-300`}>{name.charAt(0)}</span>
            )}

            {notification ? (
                <div
                    className={cn('absolute bottom-0 right-0 bg-green-700 rounded-full ring-2 ring-white', {
                        'size-7': size === 'x-large',
                        'size-6': size === 'large',
                        'size-5': size === 'medium',
                        'size-4': size === 'small',
                    })}
                    style={{ backgroundColor: notificationColor }}
                />
            ) : null}
        </div>
    );
};

export default Avatar;
