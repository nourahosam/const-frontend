import React from 'react';
import CustomButton from '../../commons/Button';
import { Grid } from '@mui/material';
import * as utils from '../../commons/utils/constants';
import {useNavigate} from 'react-router-dom'


const Homepage = (props) => {
    const navigate = useNavigate();

    const onClickNavigate = (e, pageName) => {
        navigate(`/${pageName}`);
    }

    return (<>

        <Grid >
            {utils.HOMEPAGE_BUTTONS.map((object) => {
                return (
                    <Grid item md={4}>
                        <CustomButton label={object.label} onClick={(e)=>onClickNavigate(e, object.pageName)}/>
                    </Grid>
                )
            })}

        </Grid>
    </>)
}

export default Homepage;