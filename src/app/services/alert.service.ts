import { Injectable } from '@angular/core';
// import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class AlertService {
    showInfoMessage(title: string, text: string) {
        // return Swal.fire({
        //     title,
        //     text,
        //     icon: 'info',
        //     confirmButtonText: 'Aceptar',
        // });
    }

    showSuccesMessage(title: string, text: string) {
        // return Swal.fire({
        //     title,
        //     text,
        //     icon: 'success',
        //     confirmButtonText: 'Aceptar',
        // });
    }

    showErrorMessage(title: string, text: string) {
        // return Swal.fire({
        //     title,
        //     text,
        //     icon: 'error',
        //     confirmButtonText: 'Aceptar',
        // });
    }
    showconfirmationMessage(title: string, text: string) {
        // return Swal.fire({
        //     title,
        //     text,
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     cancelButtonText: 'Cancelar',
        //     confirmButtonText: 'Aceptar',
        // });
    }
    showconfirmationMessageYesNoOptions(title: string, text: string) {
        // return Swal.fire({
        //     title,
        //     text,
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     cancelButtonText: 'No',
        //     confirmButtonText: 'Si',
        // });
    }
}
