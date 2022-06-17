import { makeStyles, withStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    modellingGallerySlider:{
        '& .slick-arrow':{
            top: "41%",
        },
        '& .slick-next':{
            
        },
        '& .slick-prev':{
            transform: 'scaleX(-1)'
        },
        '& .modelling_gallery_ss':{
            '& .modelling_gallery_slide':{
                position: 'relative',
                
                '& .modelling_gallery_slide_content':{
                    position: 'absolute',
                    top: '0px',
                    height: 'calc(100% - 30px)',
                    width: 'calc(100% - 30px)',
                    background: 'rgba(0,0,0,.30)',
                    top: '12px',
                    left: '12px',
                    transition: 'all .30s linear',
                    '&:hover':{
                        transform: ' scale(1.05)'
                    }
                }
            }
        }
    },
    modelling_add_box:{
        '& .modelling_add_box__content':{
            background: 'rgba(214,28,28,.25)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            '& a':{
                position: 'relative',
                zIndex: '9',
            },
            '&::before':{
                content: '""',
                position: 'absolute',
                top: '10%',
                left: '10%',
                border: '1px solid #fff',
                height: '80%',
                width: '80%'
            }
        }
    }

    
}), {index: 1});