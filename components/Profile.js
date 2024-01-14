'use client';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import React from 'react';

const Profile = (a) => {
  const router = useRouter();

    useEffect(() => {
        if(typeof window !== "undefined" && !localStorage.getItem('userid')) {
            router.push('/login');
        }
    }, []);

    let [major, setMajor] = useState("");
    let [year, setYear] = useState("");
    let [interests, setInterests] = useState("");

    useEffect(() => {
        fetch('/api/getUserData', {
            body: localStorage.getItem('userid'),
            method: "POST"
        }).then(res => res.json())
        .then(ud => {
            setMajor(ud.major || '');
            setYear(ud.year || '');
            setInterests(ud.interests || '');
        }); 
    }, []);

    
    const onSubmit = async () => {
        fetch('/api/updateProfile', {
            method: "POST", 
            body: JSON.stringify({
                id: localStorage.getItem('userid'),
                major, year, interests
            })}).then(() => alert("Updated profile info!"))
            .catch(e => alert(e));
    }

  return (
    <div className='content'>
        <label>Major</label><br/>
        <input value={major} onChange={e => setMajor(e.target.value)} name="major"/><br/>
        <label>Year</label><br/>
        <input value={year} onChange={e => setYear(e.target.value)} name="year"/><br/>
        <label>Interests</label><br/>
        <input value={interests} onChange={e => setInterests(e.target.value)} name="interests"/><br/>
        <button className="siteButtons" onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Profile;