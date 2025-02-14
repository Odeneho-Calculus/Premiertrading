import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import CustomSelect from "../../elements/CustomSelect";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

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
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [isMobile, setIsMobile] = useState(false);

    const handleSelectChange = (selectedOption) => {

        const newLocale = selectedOption.value;
    
        if (newLocale !== currentLocale) {
    
            // Session cookie (no max-age)
    
            document.cookie = `preferredLocale=${newLocale};path=/;`;
    
            const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    
            const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;
    
            router.push(newPath);
    
        }
    
    };

    // Check for stored language preference on component mount
   /* useEffect(() => {
        const cookies = document.cookie.split(';');
        const storedLocale = cookies
            .find(cookie => cookie.trim().startsWith('preferredLocale='))
            ?.split('=')[1];
            
        if (storedLocale && storedLocale !== currentLocale) {
            const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
            const newPath = `/${storedLocale}${pathWithoutLocale || '/'}`;
            router.push(newPath);
        }
    }, []);*/

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    useEffect(() => {
        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize); // Add event listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
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
                                    <Link href="/"><img src="/assets/images/icons/favicon.png" alt="Logo" width={40} height={40} /></Link>
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
            {/* Add spacing to prevent content overlap when header is fixed */}
        </>
    );
}