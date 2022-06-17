import { makeStyles, withStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    search_bar:{
        '& .MuiInputBase-root':{
            borderRadius: '0px !important',
        },
        '& .MuiSelect-select':{
            padding: '13px 15px !important',
        },
        '& .MuiOutlinedInput-input':{
            padding: '13.5px 14px !important',
            borderRadius: '0px !important'
        },
        '& .searchBar_btn':{
            border: '1px solid #bbb !important',
        }
    },
    realtion_lounges_grid:{
        '& .relation_lounges_item':{
            maxWidth: '14.28%',
            '& .relation_lounges_item_inner':{
                padding: '2px 5px',
                '& .relation_img':{
                   maxWidth: '100% !important' 
                }
            }
        }
    }
    
}), {index: 1});