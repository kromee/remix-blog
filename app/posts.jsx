
import { Outlet } from "@remix-run/react"

function Posts(){
    return (
    <div>
        <h1>post router</h1>
        <Outlet />
    </div>
    )
}

export default Posts    

