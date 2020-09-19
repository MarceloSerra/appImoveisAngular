import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HellocompComponent } from './components/hellocomp/hellocomp.component';
import { ImovelCardComponent } from './components/imovel-card/imovel-card.component';
import { ImovelPageComponent } from './components/imovel-page/imovel-page.component';
import { MenuPageLayoutComponent } from './components/menu-page-layout/menu-page-layout.component';

const routes: Routes = [
{
  path: '',
  component: MenuPageLayoutComponent,
  children: [
    {
      path: '',
      component: ImovelPageComponent,
    },
    {
      path:'exemplo',
      component: HellocompComponent,
    }
]
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
