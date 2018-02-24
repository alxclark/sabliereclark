import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Force page to scroll to top when routerLink changes
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

      ngOnInit() {
          this.router.events.subscribe((evt) => {
              if (!(evt instanceof NavigationEnd)) {
                  return;
              }
              window.scrollTo(0, 0)
          });
      }

  title = 'app';
}
