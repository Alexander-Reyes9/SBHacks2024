'use client';

import React from 'react'
import onSubmit from '../pages/api/database';
import { useState } from 'react';

const Profile = () => {

  let [major, setMajor] = useState("");
  let [year, setYear] = useState("");
  let [interests, setInterests] = useState("");
  let [pronouns, setPronouns] = useState("");
  let [race, setRace] = useState("");

  return (
    <div className='content'>
        <form>
          <label for="major">Major</label><br/>
          <input type="text" onChange={setMajor} name="major"/><br/>
          <label for="year">Year</label><br/>
          <input type="text" onChange={setYear} name="year"/><br/>
          <label for="interests">Interests</label><br/>
          <input type="text" onChange={setInterests} name="interests"/><br/>
          <label for="pronouns">Pronouns</label><br/>
          <input type="text" onChange={setPronouns} name="pronouns"/><br/>
          <label for="race">Race</label><br/>
          <input type="text" onChange={setRace} name="race"/><br/>
          <button onClick={onSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default Profile;