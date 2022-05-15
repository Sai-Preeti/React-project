import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setAchievements} from '../../slices/achievements'

function Achievements() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()
    const onFormSubmit=(achObj)=>
     {
      // let actionObj=BasicInfo(basicObj)
      dispatch(setAchievements(achObj))
      console.log(achObj)
     }
    return ( 
        <div className="form1 m-auto">
            <div>
            <p style={{marginLeft:"11.8rem"}} className='display-5 mt-5'>Achievements</p>
            <hr style={{marginLeft:"11.8rem",marginRight:"11.7rem"}}/>
            <form action="" className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
            <div>
            {/* <div className='mb-3'>
              <label for="name" class="mt-2">Title</label>
              <input type="text" id="name" className="form-control" {...register('name')}/>
            </div> */}
            <div className='mb-3'>
              <label for="name" class="hd mb-2">List your achievements</label>
              <input type="text" id="name" className="form-control mb-3" placeholder = 'Line 1'{...register('name')}/>
            
              <input type="text" id="name" className="form-control mb-3" placeholder = 'Line 2'{...register('name')}/>

              <input type="text" id="name" className="form-control mb-3" placeholder = 'Line 3'{...register('name')}/>

              <input type="text" id="name" className="form-control mb-3" placeholder = 'Line 4'{...register('name')}/>
            </div>
            </div>
            <button type="submit" style={{width:"5rem"}} className='btn btn-primary d-block mt-5'>Save</button>
            </form>
          </div>
        </div>
    )
}

export default Achievements