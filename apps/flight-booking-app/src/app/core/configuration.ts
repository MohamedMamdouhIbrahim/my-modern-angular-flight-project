import {  httpResource } from '@angular/common/http';
import {  computed, inject, Injectable } from '@angular/core';
import { AppConfig } from './data/configuration.model';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Configuration {
  //#region public

public config = httpResource<AppConfig>(
  () => `/assets/configuration/config.json`
);

endPoints = computed(() => this.config.value()?.endpoints); 
featFlags = computed(() => this.config.value()?.featureFlag);
  //#endregion public
}
