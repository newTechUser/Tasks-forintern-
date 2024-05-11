import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useEffect ,useState } from 'react';
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dataCarType,setdataCarType] = useState([])
  const [dataCarGroup,setdataCarGroup] = useState([])
  const [dataCarMarka,setdataCarMarka] = useState(null)
  const [dataCarBrand,setdataCarBrand] = useState([])
  const [dataCarNumber,setdataCarNumber] = useState([])
  const [carIdforBrand,setcarIdforBrand] = useState()
  const [carDriver,setcarDriver] = useState([])

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0dXJhbi5raGlkaWxvdkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlkIjo4LCJleHAiOjc3MTU0MDgwNzUsImlhdCI6MTcxNTQwODA3NX0.HARQPEK7UQ4gJSLNRaDGt_s4Qw9Mq7-sEUKgBwiMgyU");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  
  const getdataCarType = async() => {
    fetch("http://65.108.86.31:8080/sg/private/api/car-type", requestOptions)
    .then((response) => response.json())
    .then((result) => setdataCarType(result))
    .catch((error) => console.error(error));
  }
  useEffect(()=>{
    getdataCarType()
  },[dataCarType])

  const getdataCarGroup = async() => {
    fetch("http://65.108.86.31:8080/sg/private/api/enums?type=OWNERSHIP_ENUM", requestOptions)
    .then((response) => response.json())
    .then((result) => setdataCarGroup(result))
    .catch((error) => console.error(error));
  }
  useEffect(()=>{
    getdataCarGroup()
  },[dataCarGroup])

  const getdataCarMarka = async() => {
    fetch("http://65.108.86.31:8080/sg/private/api/car-brands", requestOptions)
    .then((response) => response.json())
    .then((result) => setdataCarMarka(result))
    .catch((error) => console.error(error));
  }
  useEffect(()=>{
    getdataCarMarka()
  },[dataCarMarka])

  const getdataCarBrand = async() => {
    fetch("http://65.108.86.31:8080/sg/private/api/car-brand-models/by-brand/1", requestOptions)
    .then((response) => response.json())
    .then((result) => setdataCarBrand(result))
    .catch((error) => console.error(error));
  }
  useEffect(()=>{
      getdataCarBrand()
  },[dataCarBrand])

  const getdataCarNumber = async() => {
    fetch("http://65.108.86.31:8080/sg/private/api/car/filter-cars?brandModelId=1&carTypeId=1&ownershipEnumId=1", requestOptions)
    .then((response) => response.json())
    .then((result) => setdataCarNumber(result))
    .catch((error) => console.error(error));
  }
  useEffect(()=>{
    getdataCarNumber()
  },[dataCarNumber])

  const getcarDriver = async() => {
    fetch("http://65.108.86.31:8080/sg/private/api/car/filter-cars?brandModelId=1&carTypeId=1&ownershipEnumId=1", requestOptions)
    .then((response) => response.json())
    .then((result) => result.map(element => {
      setcarDriver(element.carDriverList)
    }))
    .catch((error) => console.error(error))
  }
  useEffect(()=>{
    getcarDriver()
  },[carDriver])
  return (
    <div>
      <Button onClick={handleOpen}>Maşın seçimi</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Masin teyin edilmesi
          </Typography>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
            <div className='contaainer'>
                <div className='containerbox' style={{display:'flex'}}>
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Maşın növü"
                      defaultValue=""
                    >
                      { dataCarType && dataCarType.map((element) => (
                        <MenuItem key={element.name} value={element.name}>
                          {element.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Maşın Grupu"
                      defaultValue=""
                    >
                      {dataCarGroup.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Maşın markasi"
                      defaultValue=""
                    >
                      {dataCarMarka && dataCarMarka.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>
                <div className='containerbox' style={{display:'flex'}}>
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Maşın modeli"
                      defaultValue=""
                    >
                      {dataCarBrand.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Maşın nomresi"
                      defaultValue=""
                    >
                      {dataCarNumber.map((option) => (
                        <MenuItem key={option.id} value={option.carPlateNumber}>
                          {option.carPlateNumber}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Maşın surucu"
                      defaultValue=""
                    >
                      {carDriver.map((option) => (
                        <MenuItem key={option.id} value={option.appUser.firstName}>
                          {option.appUser.firstName}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>
            </div>
            <Stack spacing={2} direction="row">
              <Button variant="text" >Bagla</Button>
              <Button variant="contained">Elave et</Button>
            </Stack>
        </Box>
        </Box>
      </Modal>

  </div>
  );
}

export default App;
