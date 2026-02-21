import { useEffect } from 'react';
import '../pro-analysis/pro-analysis.scss';

const SignalsTracker = () => {
    useEffect(() => {
        document.title = 'Signals Tracker - BRAM-FX';
    }, []);

    return (
        <div className="iframe-page-container">
            <iframe
                src="https://tracktool.netlify.app/signals.html"
                title="Signals Tracker"
                className="iframe-content"
                allow="clipboard-read; clipboard-write"
            />
        </div>
    );
};

export default SignalsTracker;
