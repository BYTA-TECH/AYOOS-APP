/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//35.243.137.225:8072';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
