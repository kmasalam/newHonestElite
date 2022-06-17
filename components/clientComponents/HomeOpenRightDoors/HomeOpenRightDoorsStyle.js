import { makeStyles, withStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    home_open_right_doors_gallery:{
        display: 'flex',
        flexWrap: 'wrap',
        '& .open_right_doors_item':{
            maxWidth: '20%',
            flex: '0 0 20%',
            position: 'relative',
            '& .home_open_right_doors_box':{
                position: 'absolute',
                bottom: '35px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(1,1,1,.2)',
            }
        }
    }
}), {index: 1});