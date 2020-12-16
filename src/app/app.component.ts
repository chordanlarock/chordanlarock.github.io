import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'objection-chatlog-gen';
  chatLogCtrl: FormControl = new FormControl(undefined);
  generatedFrames: DialogFrame[] = [];
  potentialUsers: string[] = [];
  userCharacterCtrls: FormArray = new FormArray([]);

  characterOptions: string[] = ['One', 'Two', 'Three'];

  ngOnInit(): void {
    this.chatLogCtrl.valueChanges.subscribe(val => {
      this.generateDialogFrames(val);
    });
  }



  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }

  toBase64 = (input: string): string => btoa(input);

  private generateDialogFrames(text: string): void {

    this.userCharacterCtrls.controls = [];
    this.potentialUsers = [];

    const userRegex = '((.*)(?:(?:\\d\\d\\/\\d\\d\\/\\d\\d\\d\\d)|(?:(?:Yesterday|Today) at (?:(?:1[0-2]|0?[1-9]):(?:[0-5][0-9]) ?(?:[AaPp][Mm]))))\\n?)';
    const discordRegex = new RegExp(`${userRegex}((?:(?:[\\s\\S]*?)(?=${userRegex}))|(?:[\\s\\S]*))`, 'g');
    let match = discordRegex.exec(text);
    const userMatchGroup = 2;
    const msgMatchGroup = 3;
    while (match != null) {
      this.potentialUsers.push(match[userMatchGroup]);
      // @ts-ignore
      this.generatedFrames.push({
        text: match[msgMatchGroup]
      });
      match = discordRegex.exec(text);
    }


    this.potentialUsers = [...new Set(this.potentialUsers)];
    this.potentialUsers.map(user => {
      this.userCharacterCtrls.push(new FormControl());
    });

    // remember to take emojis out before BTOA
  }
}

export type DialogFrame = {
  id: number;
  text: string;
  poseId: number;
  bubbleType: number;
  username: string;
  mergeNext: boolean;
  doNotTalk: boolean;
  goNext: boolean;
  poseAnimation: boolean;
  flipped: boolean;
  frameActions: any[];
  frameFades: any[];
  background?: any;
  characterId?: any;
};
