import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Button } from '@mui/material';
function Preview() {
  const {basicInfo}=useSelector(state=>state.basicInfo)
  const {education}=useSelector(state=>state.education)
  const {projects}=useSelector(state=>state.projects)
  const {skills}=useSelector(state=>state.skills)
  const {user1}=useSelector(state=>state.workExperience)
  const {user2}=useSelector(state=>state.skills)
//   const userDummy = {
//       name:"Nikhil",
//       title:"Developer",
//       email: "iampsnikhil98@gmail.com",
//       phone:"9494252475",
//       github:"github.com",
//       linkedin:"linkedin.com"
//   }

  useEffect(()=>{
    console.log("basicInfo is :",basicInfo)
    console.log("education is :",education)
    console.log("projects is :",projects)
    if(user1!=null){
      console.log("username is :",user1.title)
    }
    // if(user2!=null){
    //   console.log("username is :",user2.title)
    // }
  },[basicInfo,education,projects,skills,user2])

  const displayEducation = education.map(e=>{
    return(
      <div>
        <h4 className='text-primary'>{e.program}</h4>
        <h6><FmdGoodIcon/> {e.institution}</h6>
        <p><CalendarTodayIcon/> {e.startDate} to {e.endDate}</p> 
      </div>
    )
  })
  const displayProject = projects.map(e=>{
    return(
      <div>
        <h4 className='text-primary' key={e}>{e.title}</h4>
        <h6 key={e}>{e.overview}</h6>
        <p key={e}>{e.githubLink}</p> 
      </div>
    )
  })
  const displaySkill = skills.map(e=>{
    return(
      <div>
        <li className='text-primary' key={e}>{e.skill}</li>
      </div>
    )
  })

  return(
    <div>
      <div class="bg-light" style={{border:"1px solid grey", margin:"140px", padding:"40px"}}>
          {/* <p className="display-3 mt-5">List of Users</p> */}
          {/* {user==null && <p className='display-5 text-danger'>No User Found</p>} */}
          <form action="">
            <div>
            {basicInfo!=null &&  <h1 className='heading ms-3 display-2'>{basicInfo.name}</h1>}
              {basicInfo!=null && <h2 className='ms-3 subheading text-primary display-6'>{basicInfo.title}</h2>}
              <div className='d-flex'>
                <div className='d-flex ms-3 me-5 align-items-center'>
                {basicInfo!=null &&  <AlternateEmailIcon />}
                    {basicInfo!=null &&<h3>{basicInfo.email}</h3>}
                </div>
                <div className='d-flex me-5 align-items-center'>
                {basicInfo!=null && <PhoneIcon />}
                    {basicInfo!=null &&<h3>{basicInfo.phno}</h3>}
                </div>
                <div className='d-flex me-5 align-items-center'>
                {basicInfo!=null && <LinkedInIcon />}
                    {basicInfo!=null && <h3>{basicInfo.LinkedIn}</h3>}
                </div>
                <div className='d-flex me-5 align-items-center'>
                {basicInfo!=null && <GitHubIcon />}
                    {basicInfo!=null && <h3>{basicInfo.githubLink}</h3>}
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{flex:"0.6"}} className='me-5'>
                <div id="education" className='mt-5'>
                    <h3>Education</h3>
                    <hr/>
                    {displayEducation}
                  </div>
                  <div id="projects" className='mt-5'>
                    <h3>Projects</h3>
                    <hr/>
                    {displayProject}
                  </div>
                </div>
                <div style={{flex:"0.4"}} className='me-5'>
                  <div id="workExperience" className='mt-5'>
                    <h3>Work Experience</h3>
                    <hr/>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque cum rem omnis, est beatae assumenda optio eveniet. Repellat eius quibusdam nostrum unde, autem et impedit consequatur adipisci cupiditate expedita.</p> */}
                    {user1!=null &&  <h5>{user1.title}</h5>}
                    {user1!=null && <h4 className='text-primary'>{user1.companyName}</h4>}
                    <div className='d-flex mb-2'>
                    {user1!=null && <AttachFileIcon/>}
                    {user1!=null && <a href="">{user1.certificateLink}</a>}
                    </div>
                    <div className='d-flex mb-2'>
                    {user1!=null && <CalendarTodayIcon/>}
                    {user1!=null && <h6>{user1.startDate} to {user1.endDate}</h6>}
                    </div>
                    <div className='d-flex mb-2'>
                    {user1!=null && <FmdGoodIcon/>}
                    {user1!=null && <h6>{user1.location}</h6>}
                    </div>
                    {user1!=null && <p>{user1.description}</p>}
                  </div>
                  <div id="skills" className='mt-5'>
                    <h3>Skills</h3>
                    <hr/>
                      {displaySkill}
                  </div>
                  <div id="achievements" className='mt-5'>
                    <h3>Achievements</h3>
                    <hr />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat culpa pariatur id aperiam ex. Similique quod, nostrum suscipit ab animi fuga reprehenderit assumenda tempora eius maiores praesentium cumque dolores!</p>
                  </div>
                </div>
              </div>
            </div>
          {/* {user!=null && <p className='display-5 text-danger'>{user.name}</p>} */}
          </form>
      </div>
      <div className='m-auto'>
        <Button color="primary">Print</Button>
      </div>
    </div>
   
   )

}

export default Preview;
