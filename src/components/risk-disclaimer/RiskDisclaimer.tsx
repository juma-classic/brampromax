import React, { useState } from 'react';
import './RiskDisclaimer.scss';

export const RiskDisclaimer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Risk Disclaimer Button - Bottom Left */}
            <button
                className="risk-disclaimer-button"
                onClick={() => setIsOpen(true)}
                aria-label="Risk Disclaimer"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
                    <path d="M12 9v6M12 17h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Risk Disclaimer</span>
            </button>

            {/* Risk Disclaimer Modal */}
            {isOpen && (
                <div className="risk-disclaimer-overlay" onClick={() => setIsOpen(false)}>
                    <div className="risk-disclaimer-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="risk-disclaimer-header">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 22h20L12 2z" fill="#ff4444" />
                                <path d="M12 9v6M12 17h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <h2>Risk Disclaimer</h2>
                            <button
                                className="risk-disclaimer-close"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>

                        <div className="risk-disclaimer-content">
                            <p>
                                Deriv offers complex derivatives, such as options and contracts for difference ("CFDs"). 
                                These products may not be suitable for all clients, and trading them puts you at risk.
                            </p>

                            <p>Please make sure that you understand the following risks before trading Deriv products:</p>

                            <ul>
                                <li>
                                    <strong>a)</strong> You may lose some or all of the money you invest in the trade
                                </li>
                                <li>
                                    <strong>b)</strong> If your trade involves currency conversion, exchange rates will affect your profit and loss
                                </li>
                            </ul>

                            <div className="risk-disclaimer-warning">
                                You should never trade with borrowed money or with money that you cannot afford to lose.
                            </div>
                        </div>

                        <button
                            className="risk-disclaimer-understand"
                            onClick={() => setIsOpen(false)}
                        >
                            I Understand
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
