import React, { useState, useEffect } from 'react'
import { Box, Tab } from '@material-ui/core'
import Tabs from '@mui/material/Tabs';
import { ApiUrl } from '../../../utils/enums/apiUrls';
import { DrinksCategories } from '../../../model/DrinksCategories.model';
import TabsLoadingSkeleton from './TabsLoadingSkeleton';
import TabsContent from './TabsContent';
import TabsContentLoading from './TabsContentLoading';

const TabsComponent = () => {
    const [value, setValue] = useState<Number>(0);
    const [categories, setCategories] = useState<DrinksCategories>();
    const [loading, setLoading] = useState<Boolean>(false);

    const allyProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChangeTab = (event: React.SyntheticEvent, newValue: number): void => {
        setValue(newValue);
    }

    const getCategories = async (): Promise<void> => {
        setLoading(true);
        
        const requestOptions = {
            method: 'GET',
        }

        await fetch(ApiUrl.GET_CATEGORIES, requestOptions)
            .then(resp => resp.json())
            .then((resp: DrinksCategories) => {
                setCategories(resp);
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
        getCategories();
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                { loading ? 
                    <Box sx={{ flexGrow: 1, paddingLeft: 20, paddingTop: 20, paddingRight: 20, overflow: 'hidden' }}>
                        <TabsLoadingSkeleton /> 
                    </Box> 
                    : 
                    (<Tabs value={ value } onChange={ handleChangeTab } centered variant="scrollable" scrollButtons allowScrollButtonsMobile>
                        { categories?.drinks.map((el, idx) => (
                            <Tab key={ idx } label={ el.strCategory } { ...allyProps(idx) } />
                        )) }
                    </Tabs>)
                }
            </Box>
            { loading ? 
                <Box sx={{ flexGrow: 1, paddingLeft: 20, paddingTop: 20, paddingRight: 20, overflow: 'hidden' }}>
                    <TabsContentLoading />
                </Box> 
                    : 
                categories?.drinks.map((el, idx) => (
                    <TabsContent key={ idx } value={ value } index={ idx } category={ el.strCategory } />
                ))
            }
        </Box>
    )
}

export default TabsComponent
