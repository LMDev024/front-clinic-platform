import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  getData() {
    return [
          {
            itemImageSrc: '../../../../../assets/carousel-deal.jpg',
            alt: '¿Sabías que los especialistas que firman un contrato con nosotros se adhieren a una cláusula de ética?',
            title: 'Compormetidos con tu salud'
        },
        {
            itemImageSrc: '../../../../../assets/carousel-agendamiento.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
            alt: 'Tu solución en línea para agendar citas médicas de manera rápida y conveniente.',
            title: 'Agendamiento de primer nivel'
        },
        {
            itemImageSrc: '../../../../../assets/carousel-history.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
            alt: 'Tu historia clinica al alcance de tu mano en todo momento',
            title: 'Accesibilidad a la información'
        },
        {
            itemImageSrc: '../../../../../assets/carousel-nurse.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
            alt: 'Estamos compormetidos en trabajar con especialidad de la mejor calidad para tu beneficio',
            title: 'Especialistas de calidad'
        }
    ];
}

getImages() {
    return Promise.resolve(this.getData());
}
}
