import { Component, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../login/login.component';
// import { SignupComponent } from '../signup/signup.component';

// @Component({
//   selector: 'modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{name}}!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
// export class ModalContent {
//   @Input() name;

//   constructor(public activeModal: NgbActiveModal) { }
// }

@Component({
  selector: 'app-modal-component',
  templateUrl: 'modal.component.html'
})

export class ModalComponent {
  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'World';
  }

  // opensesame() {
  //   const modalRef = this.modalService.open(SignupComponent);
  //   modalRef.componentInstance.name = 'World';
  // }
}
