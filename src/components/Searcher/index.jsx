import { Stack, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from "@mui/material";
import { styled } from "@mui/material";
import { useState } from "react";

const Searcher = ({ setInputUser }) => {

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(255, 255, 255, .5)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(255, 255, 255, .5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(255, 255, 255, .8)',
      },
      '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        color: 'white'
      },
    },
  }); /* Genera muchos problemas */


  const StackStyles = {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  }

  const [valueInput, setValueInput] = useState('')

  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  const onSeachValueChange =  ({target}) => {
    setValueInput(target.value)
    console.log(valueInput)
  }

  return (
    <Stack direction='row' sx={StackStyles}>
      <TextField
        fullWidth
        color="secondary"
        margin="normal"
        id="outlined-basic"
        label="GitHub User"
        variant="filled"
        placeholder="Username"
        value={valueInput}
        onChange={onSeachValueChange}
        sx={{
          width: '90%',
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon titleAccess="Buscar Usuario" onClick={handleSubmit} sx={{ color: 'rgb(255, 255, 255, .5)' ,cursor:'pointer' }}/>
            </InputAdornment>
          ),
          style: {
            color: 'white',
            borderColor:'white'
          }
        }}
        InputLabelProps={{
          style: {
            color: 'rgb(255, 255, 255, .5)',
          }
        }}
      />

    </Stack>
  )
}

export { Searcher }