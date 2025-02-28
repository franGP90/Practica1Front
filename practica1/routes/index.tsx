import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import{Modulo} from "../components/modulo.tsx";

export default function Home() {
  return (
    <div>
      <Modulo nombre= {"Modulo 1"} margen={10} mostrarMas= {"Mostrar más"} texto= "Holalalalalalalal"/>
      <Modulo nombre= {"Modulo 2"} margen={110} mostrarMas= {"Mostrar más"} texto= "Holalalalalalalal"/>
      <Modulo nombre= {"Modulo 3"} margen={210} mostrarMas= {"Mostrar más"} texto= "Holalalalalalalal"/>

    </div>
  );
}
