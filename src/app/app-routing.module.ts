import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ProvaComponent } from './components/prova/prova.component';
import { LeavePageGuard } from './guards/leave-page.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'form',
  component: FormComponent,
  canDeactivate: [LeavePageGuard]
}, {
  path: 'prova',
  component: ProvaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
