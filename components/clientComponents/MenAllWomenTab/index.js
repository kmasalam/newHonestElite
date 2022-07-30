import { Button } from '@mui/material';

function MenAllWomenTab({menAllWomen}) {
    if(menAllWomen.length > 0){
        return (
            <div>
                {
                    menAllWomen.map((item,i)=>{
                        return(
                            <Button
                            key={i}
                            variant='outlined'
                            className=' border border-cd6d5 border-solid rubik text-sm text-c6f6f px-4 min-w-fit font-normal py-1 hover:bg-primary hover:border-primary hover:text-white mr-2 transition-all duration-300 ease-linear '
                            >
                                {item}
                            </Button>
                        )
                    })
                }
            </div>
        );
    }else{
        return '';
    }
    
}

export default MenAllWomenTab;