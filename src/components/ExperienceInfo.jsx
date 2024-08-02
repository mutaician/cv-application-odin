/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ExperienceInfo({ experienceInfo, setExperienceInfo, handleBack, handleFormSubmit }){
    const [experienceList, setExperienceList] = useState(experienceInfo || [{ company: '', position: '', startYear: '', endYear: '', responsibilities: '' }]);

    const handleChange = (index, event) => {
        const {name, value} = event.target;
        const newExperienceList = [...experienceList];
        newExperienceList[index][name] = value;
        setExperienceList(newExperienceList);
    }

    const handleAdd = () => {
        setExperienceList([...experienceList, { company: '', position: '', startYear: '', endYear: '', responsibilities: '' }]);
    }

    const handleRemove = (index) => {
        const newExperienceList = experienceList.filter((_, i) => index !== i);
        setExperienceList(newExperienceList);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setExperienceInfo(experienceList);
        handleFormSubmit(e);
    }

    return (
        <div className="experience">
            <h1>Experience Information</h1>
            <form onSubmit={handleSubmit}>
                {experienceList.map((experience, index) => (
                    <div key={index} className="experience-entry">
                        <div>
                            <label htmlFor={`company${index}`}>Company: </label>
                            <input type="text" id={`company${index}`} name="company" value={experience.company} onChange={(event) => handleChange(index, event)} />
                        </div>
                        <div>
                            <label htmlFor={`position${index}`}>Position: </label>
                            <input type="text" id={`position${index}`} name="position" value={experience.position} onChange={(event) => handleChange(index, event)} />
                        </div>
                        <div>
                            <label htmlFor={`startYear${index}`}>Start Year: </label>
                            <input type="number" id={`startYear${index}`} name="startYear" value={experience.startYear} onChange={(event) => handleChange(index, event)} />
                        </div>
                        <div>
                            <label htmlFor={`endYear${index}`}>End Year: </label>
                            <input type="number" id={`endYear${index}`} name="endYear" value={experience.endYear} onChange={(event) => handleChange(index, event)} />
                        </div>
                        <div>
                            <label htmlFor={`responsibilities${index}`}>Responsibilities: </label>
                            <textarea id={`responsibilities${index}`} name="responsibilities" value={experience.responsibilities} onChange={(event) => handleChange(index, event)} />
                        </div>
                        { experienceList.length > 1 && <button type="button" onClick={() => handleRemove(index)}>Remove</button> }
                    </div>
                ))}
                <button type="button" onClick={handleAdd}>Add another Experience</button>
                <button type="button" onClick={handleBack}>Back</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}