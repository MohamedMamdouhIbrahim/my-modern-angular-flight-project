import { Component, Inject, inject, OnInit, PLATFORM_ID, PlatformRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {

  constructor( private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    

  }
ngOnInit(): void {
  if(isPlatformBrowser(this.platformId)){
    this.http.get('/api?to=world').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });
  }
}
}
