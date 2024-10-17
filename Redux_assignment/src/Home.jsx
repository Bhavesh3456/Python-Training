import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { del } from './reducer'
import { useState } from 'react'

function Index() {
    const f = useSelector(xyz => xyz.proper)
    const dispatch = useDispatch()
    const deleting = (okay) => {
        dispatch(del({ id: okay }))



    }
    
    


    return (
        <>
            
            <input type="text" name="" id=""  />
            <button >search</button>
            <div className="container">
                <Link to='/add' className='t1'>Add</Link>
            </div>
            <table border={2} className='f1' cellPadding={5} cellSpacing={3}>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                </tr>

                {
                    f.map((v) => (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <Link to={`/edit/${v.id}`} className='design'>Edit</Link>
                            <Link to={`/view/${v.id}`} className='d1'>View</Link>
                            <button onClick={() => { deleting(v.id) }} className='d2'>Delete</button>
                        </tr>
                    ))
                }
            </table>

        </>
    )
}
export default Index