import React from 'react';

export default function Syllabus() {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginBottom: '1rem' }}>Class 11 Computer Science Syllabus</h2>
            <div style={{ flex: 1, background: 'var(--surface)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ marginBottom: '1rem' }}>CBSE Computer Science (Sr. Sec) 2025-26</p>
                <a
                    href="https://cbseacademic.nic.in/web_material/CurriculumMain26/SrSec/Computer_Science_SrSec_2025-26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        padding: '0.75rem 1.5rem',
                        background: 'var(--accent)',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span>Download / View PDF</span>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
                <div style={{ marginTop: '2rem', width: '100%', height: '600px', border: '1px solid var(--border)' }}>
                    <iframe
                        src="https://cbseacademic.nic.in/web_material/CurriculumMain26/SrSec/Computer_Science_SrSec_2025-26.pdf"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title="CBSE Syllabus"
                    />
                </div>
            </div>
        </div>
    );
}
