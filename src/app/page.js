import Image from "next/image";
import styles from "./page.css";

export default function Home() {
  return (
   <>
   <div className="divLogin" >
    <h2 className="titleSoftware" >Interasd</h2>
    <h3 className="titlepage" >Login</h3>
    <div className="divInput" >
    <label className="labelInput" >E-Email</label>
    <input className="inputField"/>
    </div>
    <div className="divInput" >
    <label className="labelInput" >Senha</label>
    <input className="inputField"/>
    </div>
    <p className="linkForgetPassworld" >Esqueceu a senha?</p>
    <button className="custombutton" >Entrar</button>
   </div>
   
   
   
   </>
  );
}
