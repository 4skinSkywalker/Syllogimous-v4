import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/syllogimous/syllogimous.module').then(m => m.SyllogimousModule)
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'docs',
        loadChildren: () =>
            import('./modules/docs/docs.module').then(m => m.DocsModule),
        canActivate: ["guardAdmin"]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
