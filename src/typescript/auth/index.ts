import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export function bootstrap(error: Object) {
    platformBrowserDynamic().bootstrapModule(AppModule);
}
