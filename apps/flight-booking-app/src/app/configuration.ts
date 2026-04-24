import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Configuration {
  //#region private
  private http = inject(HttpClient);
  //#endregion private

  //#region public
  public get config(){
    return this.http.get('assets/configuration/config.json')
  }
  //#endregion public
}
