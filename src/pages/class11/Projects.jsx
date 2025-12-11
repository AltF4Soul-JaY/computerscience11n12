import React from 'react';

const projects = [
    {
        title: "⭐ Student Result Manager",
        subtitle: "(For the topper nerd of your group)",
        aim: "To store student marks and generate total, percentage, and grade.",
        objectives: ["Learn list/dict handling", "Perform calculations", "Display structured results"],
        requirements: "Hardware: Any computer | Software: Python 3.x",
        modules: ["Add Student Record", "Calculate Total", "Calculate Percentage", "Assign Grade", "Display Result"],
        flowchart: "Input → Store → Calculate → Grade → Display",
        codeHints: "Use dictionary: {roll: [name, marks...]} | Functions for total, percentage, grade."
    },
    {
        title: "⭐ Library Book Tracker",
        subtitle: "(For the kid who’s always in the corner reading manga)",
        aim: "To manage books issued and returned from a simple library system.",
        objectives: ["Maintain list/dict of books", "Track availability", "Practice loops & conditions"],
        requirements: "Python 3.x, basic PC",
        modules: ["Add Book", "Issue Book", "Return Book", "Search Book", "Display All Books"],
        flowchart: "Menu → Choice → Operation → Return to Menu",
        codeHints: "Use list of dicts. Status: “Available” / “Issued”."
    },
    {
        title: "⭐ Simple Billing System",
        subtitle: "(For the businessman guy who says “bro I’ll open startup”)",
        aim: "To generate bills for purchased items.",
        objectives: ["Use lists/dictionaries", "Calculate totals, tax, discounts", "Display formatted bill"],
        requirements: "Python 3.x",
        modules: ["Add Item to Cart", "Remove Item", "Display Cart", "Generate Bill", "Apply Discount"],
        flowchart: "Add/Remove → Store Cart → Calculate Total → Print Bill",
        codeHints: "Cart as list: [[\"item\", qty, price], ...] | Final bill with sum()."
    },
    {
        title: "⭐ Password Strength Analyzer",
        subtitle: "(For the cybersecurity fanboy of the group)",
        aim: "To check if a password is strong or weak.",
        objectives: ["Use string functions", "Apply conditions for strength", "Improve logic building"],
        requirements: "Python 3.x",
        modules: ["Input Password", "Check Length", "Check Numbers", "Check Special Characters", "Generate Strength Score"],
        flowchart: "Password → Checks → Score → Result",
        codeHints: "Use isdigit(), isalpha(), any(), etc."
    },
    {
        title: "⭐ Attendance Management System",
        subtitle: "(For the guy who never comes to class but wants grace marks)",
        aim: "To record student attendance for a class.",
        objectives: ["Store attendance in lists/dicts", "Update counts easily", "Generate attendance percentage"],
        requirements: "Python 3.x",
        modules: ["Mark Present", "Mark Absent", "Update Entry", "Calculate Percentage", "Display Attendance Sheet"],
        flowchart: "Input → Update → Recalculate → Display",
        codeHints: "Use dict: {name: [present_days, total_days]}"
    },
    {
        title: "⭐ Contact Book Application",
        subtitle: "(The most classic project. Easy. Teacher-friendly.)",
        aim: "To store and search contact information.",
        objectives: ["Manage dictionary-based records", "Perform searching and updating", "Use functions & menus"],
        requirements: "Python 3.x",
        modules: ["Add Contact", "Search Contact", "Update Contact", "Delete Contact", "Display All Contacts"],
        flowchart: "Menu → Choose → Perform → Back to Menu",
        codeHints: "Use dict: {name: [phone, email]} | Implement basic CRUD."
    }
];

export default function Projects() {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                background: 'linear-gradient(to right, #fff, #94a3b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center'
            }}>
                Class 11 Project Ideas
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass-card" style={{
                        padding: '2rem',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{project.subtitle}</p>
                        </div>

                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
                            <strong style={{ color: 'var(--secondary)' }}>Aim:</strong>
                            <p style={{ marginTop: '0.25rem' }}>{project.aim}</p>
                        </div>

                        <div>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1' }}>Objectives:</strong>
                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                                {project.objectives.map((obj, i) => (
                                    <li key={i}>{obj}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ fontSize: '0.9rem' }}>
                            <span style={{ color: '#cbd5e1' }}>Requirements: </span>
                            <span style={{ color: 'var(--text-muted)' }}>{project.requirements}</span>
                        </div>

                        <div>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1' }}>Modules:</strong>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.modules.map((mod, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.8rem',
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px'
                                    }}>
                                        {mod}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem' }}>
                            <strong style={{ color: '#cbd5e1' }}>Flowchart: </strong>
                            <span style={{ color: 'var(--accent)' }}>{project.flowchart}</span>
                        </div>

                        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem', fontSize: '0.9rem' }}>
                            <strong style={{ color: '#cbd5e1' }}>Code Hint: </strong>
                            <code style={{ fontFamily: 'monospace', color: 'var(--secondary)' }}>{project.codeHints}</code>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
