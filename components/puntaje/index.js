import React, {useState} from "react";

import {View, Text, Pressable} from "react-native";
import styles from "./styles";

let fecha = "loading";


const puntaje = (props) => {

    let dia = "";
    
    let randomFecha =randomDate();

    let [fecha, setFecha] = useState(randomFecha);
    let [contador, setContador] = useState(0);
    let [respuesta, setRespuesta] = useState(dateToDay(randomFecha));

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.fecha}>{contador}</Text>
                <Text style={styles.fecha}>{`${fecha[0]} ${fecha[1]} ${fecha[2]}`}</Text>

                <Pressable
                style={[styles.button, {backgroundColor: "white"}]}
                    onPress={() =>{
                        randomFecha =randomDate();
                        setFecha(randomFecha);
                        respuesta = randomDay();
                        respuesta = dateToDay(randomFecha);
                        setRespuesta(respuesta);
                        }}
                    >
                <Text style={styles.text}>OTHER DATE</Text>
                </Pressable>
            </View>
        
            <View style={styles.container}>
                <Pressable 
                    style={[styles.button, {backgroundColor: "#ff0000"}]}
                    onPress ={()=>{
                        if("Lunes" === respuesta){
                            setContador(++contador);
                        }else{
                            contador = 0;
                            setContador(contador);
                        }
                        randomFecha =randomDate();
                        setFecha(randomFecha);
                        respuesta = randomDay();
                        respuesta = dateToDay(randomFecha);
                        setRespuesta(respuesta);
                    }}
                    >
                    <Text>Lunes</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Pressable 
                    style={[styles.button, {backgroundColor: '#fffc00'}]}
                    onPress ={()=>{
                        if("Martes" === respuesta){
                            setContador(++contador);
                        }else{
                            contador = 0;
                            setContador(contador);
                        }
                        randomFecha =randomDate();
                        setFecha(randomFecha);
                        respuesta = randomDay();
                        respuesta = dateToDay(randomFecha);
                        setRespuesta(respuesta);
                    }}
                    >
                    <Text>Martes</Text>
                </Pressable>
            </View>  
            <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: '#30ff00'}]}
                onPress ={()=>{
                    if("Miercoles" === respuesta){
                        setContador(++contador);
                    }else{
                        contador = 0;
                        setContador(contador);
                    } 
                    randomFecha =randomDate();
                        setFecha(randomFecha);
                        respuesta = randomDay();
                        respuesta = dateToDay(randomFecha);
                        setRespuesta(respuesta);
                }}
                >
                <Text>Miercoles</Text>
            </Pressable>
            </View>
    
            <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: '#00ffe7'}]}
                onPress ={()=>{
                    if("Jueves" === respuesta){
                        setContador(++contador);
                    }else{
                        contador = 0;
                        setContador(contador);
                    }
                    randomFecha =randomDate();
                        setFecha(randomFecha);
                        respuesta = randomDay();
                        respuesta = dateToDay(randomFecha);
                        setRespuesta(respuesta);
                }}
                >
                <Text>Jueves</Text>
            </Pressable>
            </View>
       
            <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: '#2200ff'}]}
                onPress ={()=>{
                    if("Viernes" === respuesta){
                        setContador(++contador);
                    }else{
                        contador = 0;
                        setContador(contador);
                    }
                    randomFecha =randomDate();
                        setFecha(randomFecha);
                        respuesta = randomDay();
                        respuesta = dateToDay(randomFecha);
                        setRespuesta(respuesta);
                    
                }}
                >
                <Text>Viernes</Text>
            </Pressable>
        </View>

        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: '#c000ff'}]}
                onPress ={()=>{
                    if("Sabado" === respuesta){
                        setContador(++contador);
                    }else{
                        contador = 0;
                        setContador(contador);
                    }
                    randomFecha =randomDate();
                        setFecha(randomFecha);
                        respuesta = randomDay();
                        respuesta = dateToDay(randomFecha);
                        setRespuesta(respuesta);
                }}
                >
                <Text>Sabado</Text>
            </Pressable>
        </View>
       
        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: '#ef00ff'}]}
                onPress ={()=>{
                    if("Domingo" === respuesta){
                        setContador(++contador);
                    }else{
                        contador = 0;
                        setContador(contador);
                    }
                    randomFecha =randomDate();
                        setFecha(randomFecha);
                        respuesta = randomDay();
                        respuesta = dateToDay(randomFecha);
                        setRespuesta(respuesta);
                }}
                >
                <Text>Domingo</Text>
            </Pressable>
        </View>
    </View>
    )
};
export default puntaje;



const meses = [["Enero", 31], 
                ["Febrero", 59], 
                ["Marzo", 90], 
                ["Abril", 120], 
                ["Mayo", 151],
                ["Junio", 181], 
                ["Julio", 212], 
                ["Agosto", 243], 
                ["Septiembre", 273], 
                ["Octubre", 304], 
                ["Noviembre", 334], 
                ["Diciembre", 365], 
]

function randomDate(){

  let dia = Math.floor(Math.random() * 30)+1;
  let mes = meses[Math.floor(Math.random() * 12)][0];
  let ano = Math.floor(Math.random() * 800)+1600;

  let fecha = `${dia} ${mes} ${ano}`
    let fecha2 = [dia, mes, ano];
  return fecha2;
}

const dias = ["Domingo","Lunes","Martes","Miercoles", "Jueves", "Viernes", "Sabado"];

function randomDay(){
    let dia = dias[Math.floor(Math.random()*7)]
    return dia;
}

function dateToDay(date){
    let centuryDay = date[2]%400;
  
  if(centuryDay<100){ centuryDay = 2;}
  else if(centuryDay<200) {centuryDay = 0;}
  else if(centuryDay<300) {centuryDay = 5;}
  else centuryDay = 3;

  let anioDoce = Math.floor((date[2]%100)/12);
  let residuoDoce = date[2]%100 - anioDoce*12
  let bisiestoDoce = Math.floor(residuoDoce/4);

  let diaNum = centuryDay+anioDoce+residuoDoce+bisiestoDoce;

  diaNum = diaNum%7;

  let diaDelAnio = mesToNum(date[0], date[1]);

  //console.log("dia: ", diaNum);

  //diaDelAnio 7
  //diaNum 1

  let resp = diaNum+(diaDelAnio-3);
  if(resp < 0) resp +=7;
  if(resp >= 7) resp -=7;

  return dias[resp];

}

function mesToNum(diaa, mes, bisiesto){
    let dia = diaa;
    if(bisiesto) dia++;
     switch(mes){
       case 'Enero': dia+=0; break;
       case 'Febrero':dia+=31; break;
       case 'Marzo':dia+=59; break;
       case 'Abril':dia+=90; break;
       case 'Mayo':dia+=120; break;
       case 'Junio':dia+=151; break;
       case 'Julio':dia+=181; break;
       case 'Agosto':dia+=212; break;
       case 'Septiembre':dia+=243; break;
       case 'Octubre':dia+=273; break;
       case 'Noviembre':dia+=304; break;
       case 'Diciembre':dia+=334; break; 
     }
     dia = dia%7;
     if(dia==0) dia+=7;
     return dia;
   }