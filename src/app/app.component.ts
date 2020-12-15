import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'objection-chatlog-gen';
  chatLogCtrl: FormControl = new FormControl(undefined);

  ngOnInit(): void {
  }

  toBase64(input: string): string {
    return btoa(input);
  }
}
