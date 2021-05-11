import { RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { AboutComponent } from './about/about.component'
import { FourofourComponent } from './fourofour/fourofour.component';

const routes: Routes = [ 
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: '**',
        component: FourofourComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
