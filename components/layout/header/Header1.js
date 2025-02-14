import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import CustomSelect from "../../elements/CustomSelect";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { locales } from "../../../config";

const options = [
    { value: "en", label: "En" },
    { value: "ja", label: "Ja" },
    { value: "ko", label: "Ko" },
    { value: "zh-TW", label: "Ch" },
    { value: "th", label: "Thai" },
    { value: "vi", label: "Vi" },
    { value: "fr", label: "Fr" },
    { value: "de", label: "De" },
    { value: "ru", label: "Ru" },
    { value: "es", label: "Es" },
    { value: "pt", label: "Pt" },
    { value: "it", label: "It" },
    { value: "ar", label: "Ar" },
    { value: "tr", label: "Tr" },
];

export default function Header1({ isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    const [scroll, setScroll] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle tab/window close to reset language
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleTabClose = () => {
                document.cookie = 'preferredLocale=en;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';
            };

            window.addEventListener('beforeunload', handleTabClose);
            
            return () => {
                window.removeEventListener('beforeunload', handleTabClose);
            };
        }
    }, []);

    const handleSelectChange = (selectedOption) => {
        const newLocale = selectedOption.value;
        
        if (newLocale !== currentLocale && locales.includes(newLocale)) {
            try {
                // Set session cookie
                document.cookie = `preferredLocale=${newLocale};path=/;sameSite=lax;${process.env.NODE_ENV === 'production' ? 'secure;' : ''}`;
                
                // Get the path segments
                const segments = pathname.split('/');
                // Remove the current locale from path
                segments[1] = newLocale;
                // Create new path with new locale
                const newPath = segments.join('/');
                
                // Use router.push with the complete path
                router.push(newPath);
            } catch (error) {
                console.warn('Error setting language preference:', error);
                // Fallback to direct navigation
                router.push(`/${newLocale}`);
            }
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className={`main-header ${scroll ? "fixed-header animated slideInDown" : ""}`} style={{ 
                zIndex: 1000, 
                backgroundColor: '#fff',
                width: '100%',
                boxShadow: scroll ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                position: scroll ? 'fixed' : 'relative',
                top: 0,
                left: 0
            }}>
                <div className="header-lower">
                    <div className="outer-container">
                        <div className="outer-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 20px' }}>
                            <div className="logo-box" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px',
                                flex: isMobile ? '0 0 auto' : '1'
                            }}>
                                <figure className="logo" style={{ margin: 0 }}>
                                    <Link href={`/${currentLocale}`}><img src="/assets/images/icons/favicon.png" alt="Logo" width={40} height={40} /></Link>
                                </figure>
                                <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>PREMIER</p>
                            </div>
                            <div className="menu-area clearfix" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                {isMobile ? (
                                    <>
                                        <div className="language-box" style={{ marginLeft: '10%' }}>
                                        <div className="icon-box"><i className="flaticon-earth"></i></div>
                                            <div className="custom-select">
                                                <CustomSelect 
                                                    options={options} 
                                                    onChange={handleSelectChange}
                                                    value={options.find(opt => opt.value === currentLocale)}
                                                />
                                            </div>
                                        </div>
                                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                            <i className="icon-bar"></i>
                                            <i className="icon-bar"></i>
                                            <i className="icon-bar"></i>
                                        </div>
                                    </>
                                ) : (
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div className="language-box" style={{ marginRight: '20px' }}>
                                                    <div className="icon-box"><i className="flaticon-earth"></i></div>
                                                    <div className="custom-select">
                                                        <CustomSelect 
                                                            options={options} 
                                                            onChange={handleSelectChange}
                                                            value={options.find(opt => opt.value === currentLocale)}
                                                        />
                                                    </div>
                                                </div>
                                                <Menu />
                                            </div>
                                        </div>
                                    </nav>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </>
    );
}
