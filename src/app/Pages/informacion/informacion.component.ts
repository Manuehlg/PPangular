import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-informacion',
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    AvatarModule,
    DividerModule,
    TagModule
  ],
  templateUrl: './informacion.component.html',
  standalone: true,
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  author = {
    name: 'Manuel Lemus Gil',
    role: 'Estudiante de Desarrollo de Aplicaciones Multiplataforma',
    university: 'IES Arroyo Harnina',
    about: 'Este proyecto representa mi Trabajo de Fin de Grado, donde combino mi formación en desarrollo de aplicaciones con la necesidad real de gestionar de manera sostenible los recursos hídricos en la agricultura de nuestra región.',
    projectType: 'Trabajo de Fin de Grado (TFG)',
    academicYear: '2023-2024',
    tags: [
      { label: 'Desarrollo Web', severity: 'info' },
      { label: 'Angular', severity: 'primary' },
      { label: 'Sostenibilidad', severity: 'success' },
      { label: 'Agricultura', severity: 'warning' },
      { label: 'Gestión del Agua', severity: 'help' }
    ]
  };

  projectInfo = {
    title: 'Proyecto Pozo',
    subtitle: 'Plataforma Digital para el Control y Monitorización de Recursos Hídricos',
    description: 'Este proyecto trata sobre la sostenibilidad ambiental en relación con el uso del agua en la agricultura, con un enfoque específico en la comarca de Tierra de Barros, en Extremadura.',
    context: `Se trata de una zona con una larga tradición agrícola, conocida por la calidad de sus suelos y la importancia de cultivos como el olivar, la vid, la encina y diversos productos hortofrutícolas. En los últimos años, sin embargo, el equilibrio entre desarrollo agrícola y conservación de recursos naturales está viéndose seriamente comprometido.`,
    problemDescription: `Uno de los problemas más importantes en esta comarca es el abuso en la apertura de nuevos pozos, tanto legales como ilegales, con el fin de aumentar la superficie de regadío. A pesar de que existe una normativa que regula la apertura y uso de captaciones subterráneas —principalmente a través de la Confederación Hidrográfica del Guadiana—, en muchos casos se han tramitado autorizaciones en contextos de escasez hídrica sin una planificación suficiente.`,
    challenges: [
      'Existencia de pozos no declarados o ilegales',
      'Extracción de agua sin límites ni seguimiento técnico',
      'Dificultad en la gestión correcta del recurso',
      'Falta de datos reales sobre el volumen total de agua extraído',
      'Sobreexplotación de acuíferos',
      'Competencia desleal entre explotaciones'
    ],
    solution: `La adopción de tecnologías como sensores de humedad del suelo, telemetría, sistemas de control remoto y plataformas digitales de gestión supone una gran ventaja competitiva para el sector agrícola. Estas herramientas permiten no solo reducir el consumo innecesario de agua, sino también mejorar la productividad y la rentabilidad de las explotaciones.`,
    objectives: {
      general: 'Diseño y desarrollo de una plataforma digital orientada a la monitorización, control y gestión eficiente del agua subterránea en explotaciones agrícolas.',
      specific: [
        'Crear un sistema de registro estructurado de explotaciones y pozos asociados',
        'Desarrollar una funcionalidad de monitorización por pozo',
        'Ofrecer estadísticas y análisis a nivel de explotación y de usuario',
        'Facilitar la generación de informes técnicos y fiscales',
        'Incorporar una función de redistribución de recursos hídricos entre usuarios',
        'Diseñar un sistema de traspaso de pozos entre usuarios',
        'Impulsar la digitalización del sector agrícola como ventaja competitiva'
      ]
    },
    type: 'Trabajo de Fin de Grado',
    period: '2023-2024'
  };
}
