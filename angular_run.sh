#!/bin/bash

# Ask for the name of the application
read -p "Enter the name of the application: " app_name

# Create a new Angular application
ng new $app_name

# Navigate to the application directory
cd $app_name

# Add Bootstrap to the application
npm install --save bootstrap

# Add FontAwesome to the application
npm install --save @fortawesome/fontawesome-free

# Add the navigation component
ng generate component navbar

# Add the footer component
ng generate component footer

# Add a route and a component for the home page
ng generate component home
ng generate module app-routing --flat --module=app
echo "
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
" > src/app/app-routing.module.ts

# Add navigation links to the navigation component
sed -i "s/<\/ul>/<li><a routerLink=\"\/\">Home<\/a><\/li><li><a routerLink=\"\/about\">About<\/a><\/li><\/ul>/" src/app/navbar/navbar.component.html

# Add text to the footer component
echo "<p>© $(date +%Y) - $app_name</p>" >> src/app/footer/footer.component.html

# Add text to the home page
echo "<h1>Welcome to $app_name</h1>" >> src/app/home/home.component.html

# Start the development server
ng serve