import "./index.css";
import { Grid, Typography } from "@material-ui/core";
import { Box, Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const Verifier=()=>{
    const history = useHistory();

    return(
        <div className="verifier">
            <Grid container className="verifier-background" spacing={3}>
                <Grid item lg={2}/>
                <Grid item lg={8} >
                    <Typography className="title">
                        Alfa Data                        
                    </Typography>
                </Grid>
                <Grid item lg={2}/>

                <Grid item lg={2}/>
                <Grid item lg={8}>
                    <Box className="content-input" 
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                        <TextField className="input" id="filled-basic" label="Intoduce el link aquí" variant="filled" />                                              
                    </Box>
                </Grid>
                <Grid item lg={2}/>

                <Grid item lg={3}/>
                <Grid container className="btns" spacing={2}>
                    <Grid item lg={2}>
                        <Button className="btn" variant="outlined">Link</Button>
                    </Grid>
                    <Grid item lg={2}>
                        <Button className="btn" variant="text">Imagen</Button>
                    </Grid>
                    <Grid item lg={2}>
                        <Button className="btn" variant="text">Texto</Button>
                    </Grid>
                </Grid>
                <Grid item lg={3}/>
                <Grid item lg={12}/>
                    
                <Grid item lg={1} >
                    <Button className="v-btn" variant="contained" onClick={() => {history.push("/resultado");}}>Verificar</Button>
                </Grid>

            </Grid>
        </div>

    );
}

export default Verifier;