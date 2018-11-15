import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  writeLog(str:string)
  {
    console.log('LoggingService: '+str);
  }
}
