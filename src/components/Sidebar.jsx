import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const linkStyle = ({ isActive }) => ({
        display: 'block',
        padding: '0.75rem 1rem',
        borderRadius: '6px',
        marginBottom: '0.5rem',
        color: isActive ? 'white' : 'var(--text-muted)',
        background: isActive ? 'var(--primary-dark)' : 'transparent',
        transition: 'all 0.2s',
        fontWeight: isActive ? 600 : 400
    });

    return (
        <div style={{ width: '250px', background: 'var(--surface)', height: '100vh', padding: '2rem 1rem', position: 'fixed', left: 0, top: 0, borderRight: '1px solid var(--border)' }}>
            <div style={{ marginBottom: '2rem', paddingLeft: '1rem' }}>
                <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Class 11</h3>
            </div>
            <nav>
                <NavLink to="/class11" end style={linkStyle}>Dashboard</NavLink>
                <NavLink to="/class11/syllabus" style={linkStyle}>Syllabus</NavLink>
                <NavLink to="/class11/projects" style={linkStyle}>Project Ideas</NavLink>
            </nav>
            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                <NavLink to="/" style={{ ...linkStyle({ isActive: false }), color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    ← Back to Home
                </NavLink>
            </div>
        </div>
    );
}
