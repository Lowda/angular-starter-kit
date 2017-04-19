import 'reflect-metadata';
import 'zone.js'

declare var System: any;

System.import('./typescript/auth')
    .then((App: any) => App.bootstrap({ status: 401 }));
