import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clicks = 0;
  onChanged(increaced: any) {
    increaced === true ? this.clicks++ : this.clicks--;
  }
}
