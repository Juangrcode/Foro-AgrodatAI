import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor() { }
  noticias = [
    {
      img: '../../assets/images/img-news',
      title: '¿Cómo será el trabajo en el campo después de la pandemia?',
      content: 'El mundo tiene un reto enorme para garantizar la seguridad alimentaria cuando llegue la nueva normalidad el decir, cuando se supere la pandemia generada por el coronavirus. En Al Campo, de Caracol Radio, preguntamos a empresarios, dirigentes gremiales, docentes, investigadores, sobre qué puede pasar con la producción agropecuaria en la postpandemia y cuál será el impacto sobre los campesinos colombianos. Las opiniones las iniciamos con un saludo a los campesinos de Colombia, enviado por el ministro de Agricultura, Rodolfo Zea Navarro\:',
      date: '05 Jun 2020',
      source: 'El Tiempo' 
    },
    {
      img: '../../assets/images/campesinos.jpeg',
      title: 'Las salidas del MinAgricultura para los campesinos por la crisis de la pandemia',
      content: 'El mundo tiene un reto enorme para garantizar la seguridad alimentaria cuando llegue la nueva normalidad el decir, cuando se supere la pandemia generada por el coronavirus. En Al Campo, de Caracol Radio, preguntamos a empresarios, dirigentes gremiales, docentes, investigadores, sobre qué puede pasar con la producción agropecuaria en la postpandemia y cuál será el impacto sobre los campesinos colombianos. Las opiniones las iniciamos con un saludo a los campesinos de Colombia, enviado por el ministro de Agricultura, Rodolfo Zea Navarro\:',
      date: '05 Jun 2020',
      source: 'El Tiempo'
    },
    {
      img: '../../assets/images/naranjas.jpg',
      title: 'Entre Abril y Mayo se exportaron 66 toneladas de naranja de Colombia a Estados Unidos',
      content: 'El mundo tiene un reto enorme para garantizar la seguridad alimentaria cuando llegue la nueva normalidad el decir, cuando se supere la pandemia generada por el coronavirus. En Al Campo, de Caracol Radio, preguntamos a empresarios, dirigentes gremiales, docentes, investigadores, sobre qué puede pasar con la producción agropecuaria en la postpandemia y cuál será el impacto sobre los campesinos colombianos. Las opiniones las iniciamos con un saludo a los campesinos de Colombia, enviado por el ministro de Agricultura, Rodolfo Zea Navarro\:',
      date: '05 Jun 2020',
      source: 'El Tiempo'
    },
    {
      img: '../../assets/images/credito.jpeg',
      title: 'Para crédito agrario, Minagricultura reclasificará las empresas',
      content: 'El mundo tiene un reto enorme para garantizar la seguridad alimentaria cuando llegue la nueva normalidad el decir, cuando se supere la pandemia generada por el coronavirus. En Al Campo, de Caracol Radio, preguntamos a empresarios, dirigentes gremiales, docentes, investigadores, sobre qué puede pasar con la producción agropecuaria en la postpandemia y cuál será el impacto sobre los campesinos colombianos. Las opiniones las iniciamos con un saludo a los campesinos de Colombia, enviado por el ministro de Agricultura, Rodolfo Zea Navarro\:',
      date: '05 Jun 2020',
      source: 'El Tiempo'
    },
    {
      img: '../../assets/images/app-campesinos.jpeg',
      title: 'La app que lo conecta con la agricultura colombiana en el aislamiento',
      content: 'El mundo tiene un reto enorme para garantizar la seguridad alimentaria cuando llegue la nueva normalidad el decir, cuando se supere la pandemia generada por el coronavirus. En Al Campo, de Caracol Radio, preguntamos a empresarios, dirigentes gremiales, docentes, investigadores, sobre qué puede pasar con la producción agropecuaria en la postpandemia y cuál será el impacto sobre los campesinos colombianos. Las opiniones las iniciamos con un saludo a los campesinos de Colombia, enviado por el ministro de Agricultura, Rodolfo Zea Navarro\:',
      date: '05 Jun 2020',
      source: 'El Tiempo'
      }
  ];

  getAllNews(){
    return this.noticias;
  }
  getNews(title: string){
    return this.noticias.find(news => title === news.title);
  }


}
