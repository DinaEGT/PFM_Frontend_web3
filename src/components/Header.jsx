import { ConnectKitButton } from 'connectkit';

export default function Header() {
    return (
        <header className="py-2 px-3 sm:py-4 sm:px-8 flex justify-between items-center bg-white border-b shadow-xs">
            {/* Logo para versión mobile */}
            <img src="/small_logo.png" alt="logo-mobile" className="sm:hidden" />
            {/* Logo para versión desktop */}
            <img src="/full_logo.webp" alt="logo-desktop" className="hidden sm:flex" />
            <ConnectKitButton showBalance />
        </header>
    );
}
