import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {


  residenceId!: string; 
  residenceId2!: number; 

  residence! :Residence ;
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/Image_1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/Image_2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/Image_13.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/Image_13.jpg',
      status: 'Vendu',
    },
    {
      id: 5,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/Image_6.jpg',
      status: 'En Construction',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.residenceId = params.get('id') || '';
      if(this.residenceId !== ''){
        this.residenceId2 = parseInt(this.residenceId) > this.listResidences.length ? 1:parseInt(this.residenceId);
        this.residence = this.listResidences[this.residenceId2-1] ;
      }
      else 
        this.residence = this.listResidences[parseInt(this.residenceId)]
    });
    
  }

  

}
