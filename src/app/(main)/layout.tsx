'use client'

import Sidebar from '@/components/sidebar';
import { usePathname } from 'next/navigation';
import React, { ReactNode, FC } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    const pathName = usePathname()
    return (
        <div className='flex overflow-hidden h-screen'>
            <Sidebar />
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default Layout;
