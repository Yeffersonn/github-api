import { Paper, Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { Fragment } from "react"


const PaperInformation = ({ userState: { public_repos, followers, following } }) => {
    return (
        <Fragment>
            <Paper elevation={6} sx={{backgroundColor:'rgb(0,0,0,.3)'}}>
                <Stack sx={
                    {color:'white', justifyContent:'space-around', alignItems:'center', margin:'20px'}} 
                    direction='row'>
                    <Stack sx={{alignItems:'center'}}>
                        <Typography variant="h5">Repositorios</Typography>
                        <Typography variant="h6">{public_repos}</Typography>
                    </Stack>
                    <Stack sx={{alignItems:'center'}}>
                        <Typography variant="h5" >Seguidores</Typography>
                        <Typography variant="h6">{followers}</Typography>
                    </Stack>
                    <Stack sx={{alignItems:'center'}}>
                        <Typography variant="h5" >Seguidos</Typography>
                        <Typography variant="h6">{following}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </Fragment>
    )
}

export { PaperInformation }