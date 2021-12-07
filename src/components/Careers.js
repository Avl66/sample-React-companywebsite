import React from 'react'

function Careers() {
    const careerblock=[{role:"Software Engineer", exp:"1 year"},
    {role:"Data Engineer", exp:"5 years"},
    {role:"UI Engineer", exp:"3 years"},
    {role:"Backend Developer", exp:"4 years"}]
    return (
        <div className="careersSection">
            <h1 className="centered">Roles</h1>
            <p className="centered">Find the appropriate roles matching your skills and apply here.</p>
            <div className="careers">
            {careerblock.map((e)=>{
                return <div className="career-card" key={e.exp}>
                    <h3>Job Title: {e.role}</h3>
                    <h4>Experience: {e.exp}</h4>
                    <button>Apply</button>
                </div>
            })
        }
        </div>
        <div className="contactblock">
        <h2 style={{textDecoration:"underline"}}>Contact Us</h2>
        <h3>Email: testmail.hr@gmail.com</h3>
        <h4>Contact: +91-9999999999</h4>
        </div>
        </div>
    )
}

export default Careers
