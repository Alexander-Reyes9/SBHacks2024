import React from 'react'

const Profile = () => {
  return (
    <div className='register'>
        <form>
          <label for="major">Major</label><br/>
          <input type="text" id="major" name="major"/><br/>
          <label for="year">Year</label><br/>
          <input type="text" id="year" name="year"/><br/>
          <label for="interests">Interests</label><br/>
          <input type="text" id="interests" name="interests"/><br/>
          <label for="gender">Gender</label><br/>
          <input type="text" id="gender" name="gender"/><br/>
          <label for="race">Race</label><br/>
          <input type="text" id="race" name="race"/><br/>
          <button>Submit</button>
        </form>
    </div>
  );
}

const submitHandler = () => {

}

export default Profile;