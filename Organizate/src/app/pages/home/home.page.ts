import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  form = new FormGroup({
    createActivity: new FormControl('', [Validators.required]),
    editActivity: new FormControl('', [Validators.required]),
    deleteActivity: new FormControl('', [Validators.required]),
    allActivities: new FormControl('', [Validators.required]),
  });

  utilsSvc = inject(UtilsService);

  constructor() {}

  ngOnInit() {}

  addUpdateProduct() {
    this.utilsSvc.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal'
    });
  }

  async submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
