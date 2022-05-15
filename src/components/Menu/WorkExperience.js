import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setWorkExperience} from '../../slices/workExperience'

function WorkExperience() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()
    const onFormSubmit=(workObj)=>
     {
      // let actionObj=BasicInfo(basicObj)
      dispatch(setWorkExperience(workObj))
      console.log(workObj)
     }
    return ( 
        <div className="form1 m-auto">
            <div>
            <p style={{marginLeft:"11.8rem"}} className='display-5 mt-5'>Work Experience</p>
            <hr style={{marginLeft:"11.8rem",marginRight:"11.7rem"}}/>
            <form action="" className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
            <div className='d-flex mt-5'>
            <div className='mb-3 me-5' style={{width:"35rem"}}>
              <label for="title" class="hd mt-2">Title</label>
              <input type="text" id="title" className="form-control" {...register('title')}/>
            </div>
            <div className='mb-3' style={{width:"35rem"}}>
              <label for="companyName" class="hd mt-2">Company Name</label>
              <input type="text" id="companyName" className="form-control" {...register('companyName')}/>
            </div>
            </div>
            <div className='d-flex'>
            <div className='mb-3 me-5' style={{width:"35rem"}}>
              <label for="certificateLink" class="hd mt-2">Certificate Link</label>
              <input type="text" id="certificateLink" className="form-control" {...register('certificateLink')}/>
            </div>
            <div className='mb-3 ' style={{width:"35rem"}}>
              <label for="location" class="hd mt-2">Location</label>
              <input type="text" id="location" className="form-control" {...register('location')}/>
            </div>
            </div>
            <div className="d-flex">
            <div className='mb-3 me-5'style={{width:"35rem"}}>
              <label for="startDate" class="hd mt-2">Start Date</label>
              <input type="date" id="startDate" className="form-control" {...register('startDate')}/>
            </div>
            <div className='mb-3' style={{width:"35rem"}}>
              <label for="endDate" class="hd mt-2">End Date</label>
              <input type="date" id="endDate" className="form-control" {...register('endDate')}/>
            </div>
            </div>
            <div>
            <label for="description" class="hd mt-2">Description</label>
            <input type="text" id="description" className="form-control" {...register('description')}/>
            </div>
            <button type="submit" style={{width:"5rem"}} className='btn btn-primary d-block mt-5'>Save</button>
            </form>
          </div>
        </div>
    )
}

export default WorkExperience