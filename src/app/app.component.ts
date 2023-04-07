import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reporting';
  isAuth:boolean= false;
  user!:User;
  currentPath: string | undefined;

  constructor(private service:AuthService,private router:Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.currentPath = url[0].path;
    });
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root.firstChild;
        this.currentPath = currentRoute?.routeConfig?.path;
      }
    });

    if(this.service.getToken()){
      this.service.checkToken().subscribe(
        (result: boolean) => {
          this.isAuth = result;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
    this.service.getUser().subscribe(
      (user: User) => {
        this.user = user;
        console.log(user)
      },
      (error: any) => {
        console.log(error);
      }
    );
    
    }
    
}

