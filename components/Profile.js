'use client';

import React from 'react'
import { useState } from 'react';

const Profile = () => {

  let [major, setMajor] = useState("");
  let [year, setYear] = useState("");
  let [interests, setInterests] = useState("");

  const onSubmit = async () => {
    await fetch('/api/updateProfile', {method: "POST", body: {major, year, interests}});
    
    
  }

  return (
    <div className='content'>
        <form>
          <label for="major">Major</label><br/>
          <input type="text" onChange={setMajor} name="major"/><br/>
          <label for="year">Year</label><br/>
          <input type="text" onChange={setYear} name="year"/><br/>
          <label for="interests">Interests</label><br/>
          <input type="text" onChange={setInterests} name="interests"/><br/>
          <button onClick={onSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default Profile;