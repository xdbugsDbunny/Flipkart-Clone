import { Box, Typography, Menu,MenuItem, styled } from "@mui/material";
import { Fragment, useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { style } from "@mui/system";

const Component=styled(Menu)`
    margin-top:5px;
`
const Logout=styled(Typography)`
    font-size: 16px;
    margin-left: 20px;
`
const Profile = ({ account,setAccount }) => {
    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose=()=>{
        setOpen(false);
    }

    const LogoutUser=()=>{
        setAccount('')
    }
    return (
        <Fragment>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2,cursor:"pointer" }}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose();LogoutUser();}}>
                    <PowerSettingsNewIcon color="primary" font-size="small" />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </Fragment>
    )
}

export default Profile;