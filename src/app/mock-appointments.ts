import { Appointment } from "./Appointment";

export const APPOINTMENTS: Appointment[]=[

    {id:1,doctor:{id:1,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Rafeek' ,amount:'10$',ratings:3.5,specialization:'Ortho',yearsOfExperience:8,lat:10.779428,lon:76.473091,distance:0},consultationChannel:"video",date:new Date("January 31 2019 12:30"),dateOfAppointment:new Date(),status:"completed",symptoms:["fever","cold","sneeze","head ache"]},
    {id:2,doctor:{id:2,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Maya' ,amount:'10$',ratings:4.5,specialization:'Pediatric',yearsOfExperience:8,lat:10.777924,lon:76.478109,distance:0},
    consultationChannel:"video",date:new Date("January 30 2019 11:30"),dateOfAppointment:new Date(),status:"cancelled",symptoms:["fever","cold","sneeze","head ache"]},
    {id:3,doctor:{id:3,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Ajith' ,amount:'10$',ratings:3,specialization:'Gyno',yearsOfExperience:8,lat:10.765752,lon:76.483843,distance:0},consultationChannel:"video",date:new Date("February 27 2019 10:30"),dateOfAppointment:new Date(),status:"completed",symptoms:["fever","cold","sneeze","head ache"]},
    {id:4,doctor:{id:4,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Abilash' ,amount:'10$',ratings:4,specialization:'Cardiac',yearsOfExperience:8,lat:10.744835,lon:76.435656,distance:0},
    consultationChannel:"video",date:new Date(),dateOfAppointment:new Date(),status:"approved",symptoms:["fever","cold","sneeze","head ache"]},
    {id:5,doctor:{id:5,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Sruthy' ,amount:'10$',ratings:4,specialization:'General',yearsOfExperience:8,lat:10.761883,lon:76.439588,distance:0},
    consultationChannel:"video",date:new Date(),dateOfAppointment:new Date(),status:"unapproved",symptoms:["fever","cold","sneeze","head ache"]},
    {id:6,doctor:{id:6,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Shamra' ,amount:'10$',ratings:4,specialization:'Gastrology',yearsOfExperience:8,lat:10.749235,lon:76.489660,distance:0},
    consultationChannel:"video",date:new Date(),dateOfAppointment:new Date(),status:"approved",symptoms:["fever","cold","sneeze","head ache"]},
    {id:7,doctor:{id:7,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Ruhail' ,amount:'10$',ratings:4,specialization:'Nuerologist',yearsOfExperience:8,lat:10.675476,lon:76.425846,distance:0},
    consultationChannel:"video",date:new Date("April 15 2019 13:30"),dateOfAppointment:new Date(),status:"unapproved",symptoms:["fever","cold","sneeze","head ache"]},
    {id:8,doctor:{id:8,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Sahal' ,amount:'10$',ratings:4,specialization:'Psychatrist',yearsOfExperience:8,lat:10.767163,lon:76.357281,distance:0},
    consultationChannel:"video",date:new Date("May 20 2019 20:30"),dateOfAppointment:new Date(),status:"approved",symptoms:["fever","cold","sneeze","head ache"]},
    {id:9,doctor:{id:9,imageUrl: 'https://via.placeholder.com/300*300',name:'Dr.Neeraja' ,amount:'10$',ratings:4,specialization:'Psychatrist',yearsOfExperience:8,lat:10.783106,lon:76.6424051,distance:0},
    consultationChannel:"video",date:new Date("June 23 2019 07:30"),dateOfAppointment:new Date(),status:"approved",symptoms:["fever","cold","sneeze","head ache"]}


];