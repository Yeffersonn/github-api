import { Fragment } from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { PaperInformation } from "../../components/PaperInfromation";
import { LocationInformation } from "../../components/LocationInformation";

const Description = ({ userState }) => {


    return (
        <Fragment>
            <Stack sx={{justifyContent:'center'}}>
                <Typography variant="body1">
                    {userState.bio ? userState.bio : 'No existe biografía'}
                </Typography>
            </Stack>
            <PaperInformation userState={userState} />
            <LocationInformation userState={userState} /> 
        </Fragment>
    );
}

export { Description }