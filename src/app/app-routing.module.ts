import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'tracking',
    loadChildren: () => import('./tracking/tracking.module').then( m => m.TrackingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'archiv',
    loadChildren: () => import('./archiv/archiv.module').then( m => m.ArchivPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'adtrack',
    loadChildren: () => import('./adtrack/adtrack.module').then( m => m.AdtrackPageModule)
  },
  {
    path: 'addoc',
    loadChildren: () => import('./addoc/addoc.module').then( m => m.AddocPageModule)
  },
  {
    path: 'adlogin',
    loadChildren: () => import('./adlogin/adlogin.module').then( m => m.AdloginPageModule)
  },
  {
    path: 'adchiv',
    loadChildren: () => import('./adchiv/adchiv.module').then( m => m.AdchivPageModule)
  },
  {
    path: 'adconfig',
    loadChildren: () => import('./adconfig/adconfig.module').then( m => m.AdconfigPageModule)
  },
  {
    path: 'adshot',
    loadChildren: () => import('./adshot/adshot.module').then( m => m.AdshotPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
