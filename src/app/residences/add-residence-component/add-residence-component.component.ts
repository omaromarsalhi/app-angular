import { Component, EventEmitter, Output } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-add-residence-component',
  templateUrl: './add-residence-component.component.html',
  styleUrls: ['./add-residence-component.component.css'],
})
export class AddResidenceComponentComponent {

  @Output() addResidence = new EventEmitter<Residence>();
  @Output() close = new EventEmitter<void>();

  isOpen = true; // This controls the modal visibility
  newResidence: Residence = {
    id: 0, // You can use a dynamic ID generator for real use cases
    name: '',
    address: '',
    image: '',
    status: 'Disponible',
  };

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  onSubmit() {
    if (
      this.newResidence.name &&
      this.newResidence.address &&
      this.newResidence.image &&
      this.newResidence.status
    ) {
      this.addResidence.emit(this.newResidence); // Emit the new Residence object to parent component
      this.closeModal(); // Close the modal after submission
    }
  }
}
