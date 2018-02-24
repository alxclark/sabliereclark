import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app.home';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app.nav';
import { AppFooterComponent } from './app.footer';
import { ProductsComponent } from './app.products';
import { ServicesComponent } from './app.services';
import { ContactComponent } from './app.contact';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produits', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'compagnie', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent, AppNavComponent, AppFooterComponent, HomeComponent, ProductsComponent, ServicesComponent, ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: false}
      // <-- debugging purposes only
   ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
