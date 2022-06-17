import { makeStyles, withStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    navigationBar:{
        background: '#070909',
        '& .logo_area':{
            background: '#ED028C',
            height: '100px',
            width: '100px',

        },
    },
    navigationMenu:{
        '& ul':{
            '&  li':{
                '& a':{
                    color: '#fff',
                }
            }
        }
    }
    
}), {index: 1});