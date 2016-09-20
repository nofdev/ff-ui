import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';

import { ProjectsRoutes } from './projects/index';


export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...ProjectsRoutes
];
