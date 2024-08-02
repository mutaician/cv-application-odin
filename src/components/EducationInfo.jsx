/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EducationInfo({ educationInfo, setEducationInfo, handleNext, handleBack }){
    const [educationList, setEducationList] = useState(educationInfo || [{ school: '', degree: '', graduationYear: '', fieldOfStudy: '' }]);

    const handleChange = (index, event) => {
        const {name, value} = event.target;
        const newEducationList = [...educationList];
        newEducationList[index][name] = value;
        setEducationList(newEducationList);
    }

    const handleAdd = () => {
        setEducationList([...educationList, { school: '', degree: '', graduationYear: '', fieldOfStudy: '' }]);
    }

    const handleRemove = (index) => {
        const newEducationList = educationList.filter((_, i) => index !== i);
        setEducationList(newEducationList);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationInfo(educationList);
        handleNext();
    }

    return(
        <div className="education">
            <h1>Education Information</h1>
            <form onSubmit={handleSubmit}>
                {educationList.map((education, index) => (
                    <div key={index} className="education-entry">
                        <div>
                            <label htmlFor={`school${index}`}>School: </label>
                            <input type="text" id={`school${index}`} name="school" value={education.school} onChange={(event) => handleChange(index, event)} />
                        </div>
                        <div>
                            <label htmlFor={`degree${index}`}>Degree: </label>
                            <input type="text" id={`degree${index}`} name="degree" value={education.degree} onChange={(event) => handleChange(index, event)} />
                        </div>
                        <div>
                            <label htmlFor={`graduationYear${index}`}>Graduation Year: </label>
                            <input type="number" id={`graduationYear${index}`} name="graduationYear" value={education.graduationYear} onChange={(event) => handleChange(index, event)} />
                        </div>
                        <div>
                            <label htmlFor={`fieldOfStudy${index}`}>Field of Study: </label>
                            <input type="text" id={`fieldOfStudy${index}`} name="fieldOfStudy" value={education.fieldOfStudy} onChange={(event) => handleChange(index, event)} />
                        </div>
                        { educationList.length > 1 && <button type="button" onClick={() => handleRemove(index)}>Remove</button> }
                    </div>
                ))}
                <button type="button" onClick={handleAdd}>Add another School</button>
                <button type="button" onClick={handleBack}>Back</button>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}