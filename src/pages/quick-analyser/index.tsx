import { useEffect } from 'react';
import '../pro-analysis/pro-analysis.scss';

const QuickAnalyser = () => {
    useEffect(() => {
        document.title = 'Quick Analyser - BRAM-FX';
    }, []);

    return (
        <div className="iframe-page-container">
            <iframe
                src="https://mrdukehack.netlify.app/"
                title="Quick Analyser"
                className="iframe-content"
                allow="clipboard-read; clipboard-write"
            />
        </div>
    );
};

export default QuickAnalyser;
