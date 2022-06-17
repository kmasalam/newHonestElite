import { makeStyles, withStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    interestingGallery:{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
        gridTemplateRows: "auto auto",
        gridGap: "0px",
        '& .itg_1':{
            gridColumn: "1/3",
            gridRow: "1/2",
        },
        '& .itg_3':{
            gridColumn: "4/5",
            gridRow: "1/3",
        },
        '& .itg':{
            gridGap: "0px",
            background: '#aaa',
            position: 'relative',
            minHeight: '349px'
        }
    }
    
}), {index: 1});