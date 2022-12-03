
import { Stack } from '@mui/material'
import { Grid } from '@mui/material'
import { Fragment } from 'react'
import { Typography } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = ({ userState: { location, twitter_username, blog, company } }) => {
    return (
        <Fragment>
            <Grid container spacing={4} >
                <Grid item xs={6}>
                    <Stack direction='row' spacing={2}>
                        <LocationCityIcon />
                        <Typography>{location}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction='row' spacing={2}>
                        <TwitterIcon />
                        <Typography>{twitter_username ? `@${twitter_username}` : 'No disponible'}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction='row' spacing={2}>
                        <LanguageIcon />
                        <a href={blog || '#'} target={blog ? '_blank' : '_parent'}>
                            <Typography sx={{
                                color: 'white',
                                textDecoration: 'underline'
                            }} >{blog ? blog : 'No disponible'}</Typography>
                        </a>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction='row' spacing={2}>
                        <BusinessIcon />
                        <Typography>{company ? company : 'No disponible'}</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export { LocationInformation }