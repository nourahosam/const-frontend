import React from 'react';
import CustomButton from '../../../commons/Button';
import { Grid } from '@mui/material';
import * as utils from '../../../commons/utils/constants';
import {useNavigate} from 'react-router-dom'
import styled from '@emotion/styled';

const StyledGrid = styled(Grid)((props) => ({

    justifyContent: 'space-between'
}));

const Homepage = (props) => {
    const navigate = useNavigate();

    const onClickNavigate = (e, pageName) => {
        navigate(`/${pageName}`);
    }

    return (<>
        <StyledGrid container spacing={2}>
            {utils.ADMIN_BUTTONS.map((object) => {
                return (
                    <Grid item md={4}>
                        <CustomButton label={object.label} onClick={(e)=>onClickNavigate(e, object.pageName)}/>
                    </Grid>
                )
            })}

        </StyledGrid>
    </>)
}

export default Homepage;