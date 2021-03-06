import { ManageAccountContentComponent } from './../../all-components/manage-account-content/manage-account-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageAccountPageRoutingModule } from './manage-account-routing.module';

import { ManageAccountPage } from './manage-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageAccountPageRoutingModule
  ],
  declarations: [ManageAccountPage, ManageAccountContentComponent]
})
export class ManageAccountPageModule {}
