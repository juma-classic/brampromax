import { useEffect, useState } from 'react';
import './CommunityModal.scss';

interface CommunityModalProps {
    onClose: () => void;
}

export const CommunityModal = ({ onClose }: CommunityModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animate in after mount
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const handleMaybeLater = () => {
        localStorage.setItem('community_modal_dismissed', Date.now().toString());
        handleClose();
    };

    return (
        <div className={`community-modal-overlay ${isVisible ? 'visible' : ''}`} onClick={handleClose}>
            <div
                className={`community-modal ${isVisible ? 'visible' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button className="close-btn" onClick={handleClose} aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                {/* Community Icon */}
                <div className="community-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="30" fill="#ff4757" opacity="0.1"/>
                        <path d="M32 16C28.6863 16 26 18.6863 26 22C26 25.3137 28.6863 28 32 28C35.3137 28 38 25.3137 38 22C38 18.6863 35.3137 16 32 16Z" fill="#ff4757"/>
                        <path d="M20 24C17.7909 24 16 25.7909 16 28C16 30.2091 17.7909 32 20 32C22.2091 32 24 30.2091 24 28C24 25.7909 22.2091 24 20 24Z" fill="#ff4757"/>
                        <path d="M44 24C41.7909 24 40 25.7909 40 28C40 30.2091 41.7909 32 44 32C46.2091 32 48 30.2091 48 28C48 25.7909 46.2091 24 44 24Z" fill="#ff4757"/>
                        <path d="M32 30C26.4772 30 22 34.4772 22 40V46C22 47.1046 22.8954 48 24 48H40C41.1046 48 42 47.1046 42 46V40C42 34.4772 37.5228 30 32 30Z" fill="#ff4757"/>
                        <path d="M12 36C12 33.7909 13.7909 32 16 32H20C20.7403 32 21.4357 32.1948 22.0377 32.5377C20.7707 34.4628 20 36.7403 20 39.2V44H14C12.8954 44 12 43.1046 12 42V36Z" fill="#ff4757" opacity="0.7"/>
                        <path d="M52 36C52 33.7909 50.2091 32 48 32H44C43.2597 32 42.5643 32.1948 41.9623 32.5377C43.2293 34.4628 44 36.7403 44 39.2V44H50C51.1046 44 52 43.1046 52 42V36Z" fill="#ff4757" opacity="0.7"/>
                    </svg>
                </div>

                {/* Title */}
                <h2 className="modal-title">Join Our Trading Community</h2>
                <p className="modal-subtitle">Connect & Grow Together</p>

                {/* Description */}
                <div className="description-box">
                    <div className="description-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="#94a3b8" strokeWidth="2"/>
                            <path d="M12 16L15 19L20 13" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="description-text">
                        Connect with fellow traders! Share your trading experiences, strategies, and get the latest updates on new features and classes.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                    <a
                        href="https://chat.whatsapp.com/JouzjTwJ25c4wnKoz4Wzbf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.33-3.82-.91l-.27-.16-2.84.48.48-2.84-.16-.27C4.83 14.67 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm4.5-5.85c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.42 1.41.54.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29z"/>
                        </svg>
                        Join WhatsApp Group
                    </a>

                    <a
                        href="https://www.youtube.com/@BRAMFX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-youtube"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Join YouTube Channel
                    </a>
                </div>

                {/* Additional Info */}
                <div className="additional-info">
                    <p>Get access to strategies, bots and guides sent earlier on our channel</p>
                    <a
                        href="https://www.tiktok.com/@ceobram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tiktok-link"
                    >
                        Join Our Tiktok Channel
                    </a>
                </div>

                {/* Bottom Buttons */}
                <div className="bottom-buttons">
                    <button className="btn btn-no-thanks" onClick={handleClose}>
                        NO THANKS
                    </button>
                    <button className="btn btn-maybe-later" onClick={handleMaybeLater}>
                        MAYBE LATER
                    </button>
                </div>
            </div>
        </div>
    );
};
