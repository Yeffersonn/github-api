
import { Fragment } from 'react'
import { Stack } from '@mui/material'
import { Typography } from '@mui/material'

const PrincipalInformation = ({ userState }) => {

    const { name, login, created_at } = userState

    return (
        <Fragment>
            <Stack sx={{ justifyContent: 'space-between' }} direction='row' >
                <Typography variant='h4' >{name}</Typography>
                <Typography variant='subtitle2'>{created_at}</Typography>
            </Stack>
            <Typography variant='caption'>{`@${login}`}</Typography>
        </Fragment>
    )
}

export { PrincipalInformation }