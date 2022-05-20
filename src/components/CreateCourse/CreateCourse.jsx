import React from 'react'
import './styles.css';
import Navbar from '../Navbar/Navbar'

const CreateCourse = () => {
  //const classes = useStyles();

  return (
    <><title>Create Course</title><main>
      <form className='body'>
        <div className='main'>
          <Navbar />
          <label for="title">Course Name</label>
          <input type="text" id="title" name="title" /><br />
          <label for="desc">Description</label>
          <input type="text" id="desc" name="description" /><br />
          <label for="price">Price</label>
          <input type="number" id="price" name="price" /><br />
          <label for="course">Select Course Vidoes:</label>
          <input type="file" id="course" name="course" multiple /><br />
          <label for="supplementary">Supplementary Material</label>
          <input type="file" id="files" name="supplementary" multiple /><br /><br />
          <button type="submit">Create Course</button>
        </div>
      </form>
    </main></>
  )
}

export default CreateCourse