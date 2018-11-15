import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app6';

  constructor(private lgs: LoggingService){
    //to invoke met
    this.met();
  }

  met()
  {
    this.lgs.writeLog('Just for testing service');
  }
}
