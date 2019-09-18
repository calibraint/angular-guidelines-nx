import { Environment } from '../entities/environment';
import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addDomain' })

// for when you need to reference an image or asset that lives in apiBase or systemBase.
// used like <img src="{{'assets/images/icon-lock.svg' | addDomain: 'imageBase'}}" />
export class AddDomainPipe implements PipeTransform {
  environment: Environment;

  constructor(@Inject('AppEnvironment') environmentConfig: Environment) {
    this.environment = environmentConfig;
  }

  transform(url: string, systemOrApi?: string): string {
    if (!url) {
      return ''; // Can't return null or undefined or chrome will actually make a request for '/null' or 'undefined'
    }
    const base: string = this.environment[systemOrApi] || this.environment.systemBase;
    return base + url;
  }
}
