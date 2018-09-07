import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LessonListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson-list',
  templateUrl: 'lesson-list.html',
})
export class LessonListPage {

  lessonItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lessonItems = [
      {
        avatar: 'assets/imgs/marty-avatar.png',
        name: 'Algoritmos',
        date: 'November 5, 1955',
        image: 'assets/imgs/algorithm-card.png',
        content: 'Los algoritmo ayudan al diseño de actividades, cumpliendo una serie de pasos continuos que no le generen duda a la persona que realice dicha.',
      },
      {
        avatar: 'assets/imgs/sarah-avatar.png.jpeg',
        name: 'Diagramas de flujo',
        date: 'May 12, 1984',
        image: 'assets/imgs/flow-diagram-card.png',
        content: 'Una de las formas gráficas de demostrar un algoritmo es utilizando un diagrama de flujo. Emplean diferentes figuras para definir tipos de pasos'
      },
      {
        avatar: 'assets/imgs/ian-avatar.png',
        name: 'Programación orientada a objetos y UML',
        date: 'June 28, 1990',
        image: 'assets/imgs/POO-card.png',
        content: 'POO es un paradigma de programación que usa objetos y sus interacciones para diseñar aplicaciones y programas informáticos.'
      },
      {
        avatar: 'assets/imgs/ian-avatar.png',
        name: 'Introducción a Java',
        date: 'June 28, 1990',
        image: 'assets/imgs/java-card.png',
        content: 'Java es un lenguaje desarrollado por Sun con la intención de competir con Microsoft en el mercado informático derivado de C++.'
      },
      {
        avatar: 'assets/imgs/ian-avatar.png',
        name: 'Swing en Java',
        date: 'June 28, 1990',
        image: 'assets/imgs/swing-java-card.png',
        content: 'Swing es una biblioteca de interfaces gráficas de usuario (GUI) para Java. Extiende a otra librería gráfica más antigua llamada AWT.'
      },
      {
        avatar: 'assets/imgs/ian-avatar.png',
        name: 'Estructuras de datos estáticas',
        date: 'June 28, 1990',
        image: 'assets/imgs/static-card.png',
        content: 'Las estructuras de datos estáticas son aquellas en las que el tamaño ocupado en memoria se define antes de que el programa se ejecute.'
      },
      {
        avatar: 'assets/imgs/ian-avatar.png',
        name: 'Clases abstractas, interfaces y paquetes',
        date: 'June 28, 1990',
        image: 'assets/imgs/package-card.png',
        content: 'Clases abstractas son aquellas clases base (superclase) de las que no se permite la creación de objetos.'
      },
      {
        avatar: 'assets/imgs/ian-avatar.png',
        name: 'Manejo de archivos y excepciones',
        date: 'June 28, 1990',
        image: 'assets/imgs/file-card.png',
        content: 'Los archivos desde el punto de vista de más bajo nivel son definidos como un conjunto de bits almacenados en un dispositivo.'
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonListPage');
  }

}
