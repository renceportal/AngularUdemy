import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None //None or Native
})
export class AppComponent {
  title = 'Projecting content in to child component using ng-content';

  constructor() {
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}): void {
    // console.log(serverData.serverName);
    // console.log(serverData.serverContent);
  }

}
