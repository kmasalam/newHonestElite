import { useState, useEffect } from "react";
import Masonry from "react-masonry-component";

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function index(props) {

    const [viewableItem,setViewableItem] = useState(7)
    const BestFriendsData = [
        {
            name: 'Rajan Raj',
            avatar: 'images/friend-1.jpg',
            profileLink: '/'
        },
        {
            name: 'Rafikul Ellen',
            avatar: 'images/friend-2.jpg',
            profileLink: '/'
        },
        {
            name: 'Rajan Raj',
            avatar: 'images/friend-3.jpg',
            profileLink: '/'
        },
        {
            name: 'Rajan Raj',
            avatar: 'images/friend-4.jpg',
            profileLink: '/'
        },
        {
            name: 'Rajan Raj',
            avatar: 'images/friend-5.jpg',
            profileLink: '/'
        },
        {
            name: 'Eskover Ingule',
            avatar: 'images/friend-6.jpg',
            profileLink: '/'
        },
        {
            name: 'A Salam',
            avatar: 'images/friend-3.jpg',
            profileLink: '/'
        },
    ]
    
    return (
        <>
            <h5 className=" text-lg text-c2121 font-medium pb-6 ">
                Best Friends 
                <span className=" text-sm inline-flex ml-3">
                    (15)
                </span>
            </h5>
            <Box className=" flex items-center justify-between">
                <Box className=" inline-flex items-center justify-start">
                    {
                        BestFriendsData && BestFriendsData.map((item,i)=>{
                            if(i <= viewableItem - 1){
                                return(
                                    <Box key={i} className="  mr-10 inline-flex flex-col items-center justify-center">
                                        <Avatar alt="Remy Sharp" src={item.avatar} />
                                        <span className=" text-c6f6f text-xs">
                                            {item.name}
                                        </span>
                                    </Box>
                                )
                            }
                        })
                    }
                </Box>
                <Box className=" inline-flex flex-col items-start justify-center">
                    <Button 
                    className=" bg-slate-200 inline-flex shadow-sm drop-shadow-sm h-10 w-10 rounded-full" style={{
                        minWidth: '40px'
                    }}>
                        <AddIcon className=" text-c6f6f"/>
                    </Button>
                    <span className=" text-c2121 text-xs font-medium inline-flex pt-1 -ml-4">
                    Invite Friend
                    </span>
                </Box>
            </Box>
        </>
    );
}

export default index;