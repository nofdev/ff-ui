import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  providers: []
})
export class ProjectsModule { }
