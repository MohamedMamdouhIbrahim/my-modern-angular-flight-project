import { Component, effect, Inject, inject, OnInit, PLATFORM_ID, PlatformRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Configuration } from './core/configuration';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {

  constructor( private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object, private config: Configuration) {
    
    effect(() => {
      const value = this.config.config.value();

      if (value) {
        console.log('Config loaded:', value);
      }
    });
  }
ngOnInit(): void {
  if(isPlatformBrowser(this.platformId)){
    // this.http.get('/api?to=world').subscribe({
    //   next: (response) => console.log(response),
    //   error: (error) => console.error(error)
    // });

    console.log('the base url is ',this.config.config.value()?.baseUrl);
  }
}
}
