import React from 'react';
import { Link } from 'react-router-dom';

export default function Class12() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '1rem' }}>Coming Soon</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>The Class 12 section is currently under development.</p>
            <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Return Home</Link>
        </div>
    );
}
