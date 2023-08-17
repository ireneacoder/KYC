
import './nav.css'
import { TbLogout} from "react-icons/tb";
// import { TextField } from '@mui/material';

export default function Nav() {
    return(
        <>
            <div className='sidenav'>
                <img src='./logo.png' alt=' logo' className='logo'></img>
                <div className='gap'></div>
                <a href='https://metashape.ai/' className='email'>www.metashape.ai</a>
                <div className='logout'>
                    <TbLogout size={24}/>
                    <p onClick={(e)=>
                        alert("Logged Out Successfully!")}> Logout</p>
                </div>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            </div>
            
            
        </>
    )
}