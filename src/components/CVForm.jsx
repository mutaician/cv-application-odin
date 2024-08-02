import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

export default function CVForm() {
    const [generalInfo, setGeneralInfo] = useState({ name: '', address: '', email: '', phone: '', about: '' });
    const [educationInfo, setEducationInfo] = useState([{ school: '', degree: '', graduationYear: '', fieldOfStudy: '' }]);
    const [experienceInfo, setExperienceInfo] = useState([{ company: '', position: '', startYear: '', endYear: '', responsibilities: '' }]);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleNext = () => setCurrentStep(currentStep + 1);

    const handleBack = () => setCurrentStep(currentStep - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setIsEditMode(false);
    }

    const handleEdit = () => {
        setIsEditMode(true);
        setCurrentStep(1);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setGeneralInfo({ name: '', address: '', email: '', phone: '' });
        setEducationInfo({ school: '', degree: '', graduationYear: '', fieldOfStudy: '' });
        setExperienceInfo({ company: '', position: '', startYear: '', endYear: '', responsibilities: '' });
        setCurrentStep(1);
        setIsSubmitted(false);
        setIsEditMode(false);
    }

    return (
        <div className="cv-form">
            <h1>
                <a href="#" onClick={handleReset}>CV Application</a>
            </h1>
            {!isSubmitted || isEditMode ? (
                <>
                    {(currentStep === 1) && <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} handleNext={handleNext} />}
                    {(currentStep === 2) && <EducationInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo} handleNext={handleNext} handleBack={handleBack} />}
                    {(currentStep === 3) && <ExperienceInfo experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} handleBack={handleBack} handleFormSubmit={handleSubmit} />}
                </>
            ) : (
                <div className="preview">
                    <h1>{generalInfo.name}</h1>
                    <p className="contact-info">
                        {generalInfo.address}<br />
                        {generalInfo.phone}<br />
                        {generalInfo.email}
                    </p>
                    <section className="summary">
                        <h2>Summary</h2>
                        <p>{generalInfo.about}</p>
                    </section>
                    <section className="experience">
                        <h2>Experience Information</h2>
                        {experienceInfo.map((experience, index) => (
                            <div className="job" key={index}>
                                <div className="job-header">
                                    <h3>{experience.company}</h3>
                                    <span>{experience.startYear} to {experience.endYear}</span>
                                </div>
                                <p className="job-title">{experience.position}</p>
                                <ol>
                                    <li>{experience.responsibilities}</li>
                                </ol>
                            </div>
                        ))}
                    </section>
                    <section className="education">
                        <h2>Education</h2>
                        {educationInfo.map((education, index) => (
                            <div key={index} className="education-item">
                                <p>{education.school}</p>
                                <p className="degree">{education.degree}</p>
                                <p>{education.graduationYear}</p>
                                <p>{education.fieldOfStudy}</p>
                            </div>
                        ))}
                    </section>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    )
}