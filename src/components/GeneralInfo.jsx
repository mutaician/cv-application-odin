/* eslint-disable react/prop-types */
import { useState } from "react"

export default function GeneralInfo({ generalInfo ,setGeneralInfo, handleNext}) {
    const [name, setName] = useState(generalInfo.name);
    const [address, setAddress] = useState(generalInfo.address);
    const [email, setEmail] = useState(generalInfo.email);
    const [phone, setPhone] = useState(generalInfo.phone);
    const [about, setAbout] = useState(generalInfo.about);

    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneralInfo({ name, address, email, phone, about});
        handleNext();
    }
    
    return(
        <div className="general">
            <h1>General Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="about">About: </label>
                    <textarea id="about" value={about} onChange={(e) => setAbout(e.target.value)} />
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}