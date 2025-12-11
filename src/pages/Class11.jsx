import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Syllabus from './class11/Syllabus';
import Projects from './class11/Projects';

export default function Class11() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '250px', flex: 1, padding: '2rem', minHeight: '100vh', background: 'var(--background)' }}>
                <Routes>
                    <Route path="/" element={<div style={{ padding: '2rem' }}><h1>Class 11 Dashboard</h1><p>Select an option from the sidebar to get started.</p></div>} />
                    <Route path="/syllabus" element={<Syllabus />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </div>
    );
}
