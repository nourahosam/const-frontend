import React from 'react';
import CustomButton from '../../commons/Button';
import { Grid } from '@mui/material';
import * as utils from '../../commons/utils/constants';
import {useNavigate} from 'react-router-dom'
import styled from '@emotion/styled';


const ContainerGrid = styled(Grid)((props) => ({

    justifyContent: 'space-between'
}));

const Homepage = (props) => {
    const navigate = useNavigate();

    const onClickNavigate = (e, pageName) => {
        navigate(`/${pageName}`);
    }

    return (<>
        <ContainerGrid container spacing={2}>
        <CustomButton label={"ADMIN"} onClick={(e)=>onClickNavigate(e, "Admin")} />
            {utils.HOMEPAGE_BUTTONS.map((object) => {
                return (
                    <Grid item md={4}>
                        <CustomButton label={object.label} onClick={(e)=>onClickNavigate(e, object.pageName)}/>
                    </Grid>
                )
            })}

        </ContainerGrid>
    </>)
}

export default Homepage;