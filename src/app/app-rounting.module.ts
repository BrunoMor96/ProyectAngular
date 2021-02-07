import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRountingModule } from './pages/pages.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { AuthRountingModule } from './auth/auth.routing';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
	{path:'**', component: NotpagefoundComponent},
]

@NgModule({
  declarations: [],
	imports: [
		RouterModule.forRoot(routes),
		PagesRountingModule,
		AuthRountingModule
	],
	exports: [ RouterModule ]
})

export class AppRountingModule { }
