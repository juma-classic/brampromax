import { useEffect } from 'react';
import './pro-analysis.scss';

const ProAnalysis = () => {
    useEffect(() => {
        document.title = 'Pro Analysis - BRAM-FX';
    }, []);

    return (
        <div className="iframe-page-container">
            <iframe
                src="https://bot-analysis-tool-belex.web.app/"
                title="Pro Analysis Tool"
                className="iframe-content"
                allow="clipboard-read; clipboard-write"
            />
        </div>
    );
};

export default ProAnalysis;
