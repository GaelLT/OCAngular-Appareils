import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {


constructor(private authService: AuthService, private router: Router){}


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.isAuth){
            return true;
        } else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}

