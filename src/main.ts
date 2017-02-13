/**
 * check:
 * https://github.com/mirkonasato/angular2-course-webpack-starter
 */

import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
