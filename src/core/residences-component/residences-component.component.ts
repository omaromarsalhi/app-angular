import { Component } from '@angular/core';
import { Residence } from '../models/Residence';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css'],
})
export class ResidencesComponentComponent {
  constructor(private snackBar: MatSnackBar) {}

  visibilityTable: boolean[] = [false, false, false, false];
  showOrHide: string[] = ['Show', 'Show', 'Show', 'Show'];

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
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/Image_17.jpg',
      status: 'En Construction',
    },
  ];

  listFavorite: number[] = [];

  showAddress(index: number) {
    if (this.listResidences[index].address === 'inconnu')
      this.snackBar.open('inconnue alert!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['error-snackbar'],
      });
    else this.visibilityTable[index] = !this.visibilityTable[index];
    this.showOrHide[index] = this.visibilityTable[index] ? 'Hide' : 'Show';
  }
  searchTerm: string = '';

  filteredResidences() {
    if (!this.searchTerm) {
      return this.listResidences;
    }
    return this.listResidences.filter((res) => res.address.toLowerCase() === this.searchTerm.toLowerCase());
  }

  addFavorite(index: number) {
    this.listFavorite.push(index);
    this.snackBar.open(
      this.listResidences[index].name + ' was added to the list!',
      'Close',
      {
        duration: 30000000000000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        // panelClass: ['custom-snackbar'],
        panelClass: ['success-snackbar'],
      }
    );
  }
}
