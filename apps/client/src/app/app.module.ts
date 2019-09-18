import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';
import { CoreModule } from '@angular-guidelines-nx/core';
import { TitleService } from '@angular-guidelines-nx/calibraint';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/base/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.configureEnvironment(environment),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  entryComponents: [
  ],
  providers: [
    { provide: 'AppEnvironment', useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Initializing Title service for dynamic page title
  constructor(titleService: TitleService) {
    titleService.init();
  }
 }
