'use client'

import { useState } from 'react';
import HeaderWrapper from '@/components/layout/header/HeaderWrapper';

export default function LayoutClient({ locale, messages, children }) {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const handlePopup = () => {
    // Add popup handling logic if needed
  };

  return (
    <>
      <HeaderWrapper 
        locale={locale}
        messages={messages}
        scroll={false}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        isSidebar={isSidebar}
        handlePopup={handlePopup}
        handleSidebar={handleSidebar}
      />
      <main>{children}</main>
    </>
  );
}