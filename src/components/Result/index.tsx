import "./index.css";
import { Grid, Typography } from "@material-ui/core";
import { Box, Button, TextField } from "@mui/material";

const Result=()=>{
    return(
        <div className="result">
            <Grid container className="result-background" spacing={1}>
                <Grid item lg={12} >
                    <Typography className="title">
                        Falso                        
                    </Typography>
                </Grid>

                <Grid item lg={3} />
                <Grid item lg={6} >
                    <Typography className="porcentaje">
                        Existe un 96% de posibilidad de que la información contenida sea falsa.                        
                    </Typography>
                </Grid>
                <Grid item lg={3} />

                <Grid item lg={3} />
                <Grid item lg={6} >
                    <Typography className="info1">
                        Información oficial sobre el tema:                        
                    </Typography>
                    <Typography className="info2">
                    Existen diferentes tipos de vacunas, están diseñadas para preparar a nuestro sistema inmunológico a combatir enfermedades. Se están desarrollando diversos tipos de posibles vacunas contra la COVID-19, entre ellas:

Vacunas con virus inactivados o atenuados: utilizan un virus previamente inactivado o atenuado, de modo que no provoca la enfermedad, pero aún así genera una respuesta inmunitaria.

Vacunas basadas en proteínas: utilizan fragmentos inocuos de proteínas o estructuras proteicas que imitan el virus causante de la COVID-19, con el fin de generar una respuesta inmunitaria.

Vacunas con vectores virales: utilizan un virus genéticamente modificado que no puede provocar la enfermedad, pero sí puede producir proteínas de coronavirus para generar una respuesta inmunitaria segura.

Vacunas con ARN y ADN: un enfoque pionero que utiliza ARN o ADN genéticamente modificados para generar una proteína que por sí sola desencadena una respuesta inmunitaria.
                    </Typography>
                </Grid>
                <Grid item lg={3} />

            </Grid>
        </div>

    );
}

export default Result;