import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="animated-bg" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Abstract Shapes */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                borderRadius: '50%',
                opacity: 0.3,
                animation: 'float 6s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--secondary)',
                filter: 'blur(150px)',
                borderRadius: '50%',
                opacity: 0.2,
                animation: 'float 8s ease-in-out infinite reverse'
            }} />

            <div className="glass-card" style={{
                padding: '4rem',
                borderRadius: '24px',
                textAlign: 'center',
                zIndex: 10,
                maxWidth: '800px',
                margin: '1rem'
            }}>
                <h1 className="text-gradient" style={{
                    fontSize: '3.5rem',
                    marginBottom: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '-1px'
                }}>
                    Computer Science Hub
                </h1>
                <p style={{
                    color: 'var(--text)',
                    marginBottom: '3rem',
                    fontSize: '1.25rem',
                    opacity: 0.9,
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Class 11 & 12 Computer Science with attractive projects, guides, and resources.
                </p>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/class11" style={{
                        padding: '1.25rem 3rem',
                        background: 'var(--primary)',
                        borderRadius: '16px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.4)'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(99, 102, 241, 0.5)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(99, 102, 241, 0.4)'; }}
                    >
                        Go to Class 11
                    </Link>
                    <Link to="/class12" style={{
                        padding: '1.25rem 3rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '16px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        backdropFilter: 'blur(5px)',
                        transition: 'transform 0.2s, background 0.2s'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
                    >
                        Go to Class 12
                    </Link>
                </div>
            </div>
        </div>
    )
}
