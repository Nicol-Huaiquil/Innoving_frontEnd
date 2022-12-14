import { Grid, Button, Link, Spacer, Row } from "@nextui-org/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Gestion_usuario/Header";


function Analista() {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("./indicadores");
      }, []);
      
      const style = {marginLeft: 20}

      return(
          <div style={style}>
          <Spacer y = {0.5} />
          <Row>
                <Button onPress={() => navigate("./indicadores")} auto flat as={Link} href="#"> Indicadores </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./metas")} auto flat as={Link} href="#"> Metas </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./metricas")} auto flat as={Link} href="#"> Métricas </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./evidencias")} auto flat as={Link} href="#"> Evidencias </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./prueba/indicador/M25")} auto flat as={Link} href="#"> Analisis Indicadores </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./evidencias2")} auto flat as={Link} href="#"> evidencias 2 </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./publicaciones")} auto flat as={Link} href="#"> Publicaciones </Button>
                <Spacer y={0.5} />
                
                </Row>
        <Spacer x = {0.5} />
        <Outlet />
        </div >
    );
}

export default Analista;