import { CardMedia } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { PrincipalInformation } from "../../components/PrincipalInformation";
import { Description } from "../Description";




const UserCard = ({ userState }) => {
  return (
    <Grid container spacing={6}
      sx={{
        marginTop: '15px',
        color: 'white'
      }} >
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt='GitHub User'
          image={userState.avatar_url}
          sx={{
            borderRadius: '50%',
            marginLeft: '10px'
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack direction='column' spacing={2}>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export { UserCard }