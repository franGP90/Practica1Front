import { FunctionComponent } from "preact/src/index.d.ts";
import { useState } from "preact/hooks";


type infoProps = {
    nombre: string,
    mostrarMas: string,
    margen: number
    texto:string,
}


export const Modulo: FunctionComponent<infoProps>  = (props) => {
    const{nombre, mostrarMas, margen, texto} = props;
    let [accionClick, setAccionClick]= useState(false)

    const manejarClick = () => {
        setAccionClick(true);

        <div>
            <text style={{color:"#000000",marginTop:20}}>
                {texto}
            </text>
        </div>
    };

    return (
        
            

        <div> 
           <table style={{ width: "70%", textAlign: "center",
borderWidth: 1,borderColor:"#000000", backgroundColor: "#91fd6c", marginTop: margen, marginLeft:10  }}>
            <tbody>
                <tr>
                    <td style={{ width: "20%", height:"50", borderWidth: 1, borderColor: "#000000"}}>
                        {nombre}
                    </td>
                    <td style={{ width: "50%" }}>
                    </td>
                    <td style={{ width: "30%", height:"50", borderWidth: 1, borderColor: "#000000" }}>
                    <button onClick={manejarClick}>
                        {accionClick}
                        {mostrarMas}
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>
           
            
           
            
        </div>
        )
};
