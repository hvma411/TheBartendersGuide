import { Box, IconButton, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { LimitedDrinks } from '../../../model/LimitedDrink.model';
import { ApiUrl } from '../../../utils/enums/apiUrls';
import TabsContentLoading from './TabsContentLoading';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface TabContentProps {
    children?: React.ReactNode;
    index: number;
    value: Number;
    category: string;
  }
  

const TabsContent = (props: TabContentProps) => {
    const { children, value, index, category, ...other } = props;

    const [loading, setLoading] = useState<Boolean>(true);
    const [drinks, setDrinks] = useState<LimitedDrinks>();


    const getDrinksByCategory = async (): Promise<void> => {
        setLoading(true);
        
        const requestOptions = {
            method: 'GET',
        }

        await fetch(ApiUrl.GET_DRINKS_BY_CATEGORY + category, requestOptions)
            .then(resp => resp.json())
            .then((resp: LimitedDrinks) => {
                setDrinks(resp);
                setLoadingFinished();
            })
            .catch(err => console.error(err));
    }

    const setLoadingFinished = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    useEffect(() => {
       getDrinksByCategory();
    }, [])

    useEffect(() => {
        return () => setLoading(true);
    }, [])
    

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            sx={{ flexGrow: 1, paddingLeft: 20, paddingTop: 20, paddingRight: 20, overflow: 'hidden' }}
        >
            { loading ? <TabsContentLoading /> : (
                <Box 
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    { drinks?.drinks.map((el, idx) => (
                    <Box key={idx} sx={{ margin: 10, width: '100%', flexBasis: 1 }}>
                        <CardActionArea>
                            <Card sx={{ width: 290 }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={ el.strDrinkThumb }
                                    sx={{ objectPosition: 'center' }}
                                />
                                <CardContent sx={{ height: 60, position: 'relative' }}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        { el.strDrink }
                                    </Typography>
                                    <IconButton style={{ position: 'absolute', bottom: 5, right: 5}} size="small">
                                        <VisibilityIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Box>
                    )) }
                </Box>
            ) }
        </Box>
    )
}

export default TabsContent
