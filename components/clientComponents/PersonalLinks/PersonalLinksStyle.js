import { makeStyles, withStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    personal_links__container:{
        '& .personal_links__item':{
            
            '& .presonal_links__item_inner':{
                '& a':{
                    '& .personal_link':{

                    }
                }
            }
        }
    }
    
}), {index: 1});