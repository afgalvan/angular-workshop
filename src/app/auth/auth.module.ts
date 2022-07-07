import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../material.module';
import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, AuthRoutes],
  declarations: [AuthComponent],
})
export class AuthModule {}
