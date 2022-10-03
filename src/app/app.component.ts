/* tslint:disable:no-trailing-whitespace */
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UntypedFormArray, UntypedFormControl} from '@angular/forms';
import {characterGroups} from './character_ids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {

  static userRegex = '((.*)(?:(?:\\d\\d\\/\\d\\d\\/\\d\\d\\d\\d)|(?:(?:Yesterday|Today) at (?:(?:1[0-2]|0?[1-9]):(?:[0-5][0-9]) ?(?:[AaPp][Mm]))))\\n?)';
  discordRegex = new RegExp(`${AppComponent.userRegex}((?:(?:[\\s\\S]*?)(?=${AppComponent.userRegex}))|(?:[\\s\\S]*))`, 'g');

  title = 'objection-chatlog-gen';
  chatLogCtrl: UntypedFormControl = new UntypedFormControl(undefined);
  generatedFrames: DialogFrame[] = [];
  usernamesList: string[] = [];
  userCharacterCtrls = new UntypedFormArray([]);
  characterOptions: string[] = ['One', 'Two', 'Three'];

  characterIdList = characterGroups;

  ngOnInit(): void {
    this.chatLogCtrl.valueChanges.subscribe(val => {
      this.generateDialogFrames(val);
    });

    this.userCharacterCtrls.valueChanges.subscribe((selectedCharacterPoseIds: number[]) => {

      selectedCharacterPoseIds.forEach((poseId, idx) => {
        this.generatedFrames.map(frame => {
          if (frame.username === this.usernamesList[idx]) {
            frame.poseId = poseId;
          }
        });
      });
    });
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }

  toBase64 = (input: string): string => btoa(unescape(encodeURIComponent(input)));

  private generateDialogFrames(text: string): void {
    this.userCharacterCtrls.controls = [];
    this.usernamesList = [];

    let match = this.discordRegex.exec(text);
    const userMatchGroupIdx = 2;
    const msgMatchGroupIdx = 3;
    while (match != null) {
      const detectedUsername = match[userMatchGroupIdx];
      const detectedDialogText = match[msgMatchGroupIdx];

      const splitDialog = detectedDialogText.split('\n');

      splitDialog.forEach(msgLine => {
        this.generatedFrames.push(new DialogFrame(msgLine, -1, detectedUsername));
      });

      this.usernamesList.push(detectedUsername);
      match = this.discordRegex.exec(text);
    }


    this.usernamesList = [...new Set(this.usernamesList)];
    this.usernamesList.map(() => {
      this.userCharacterCtrls.push(new UntypedFormControl(''));
    });

    // remember to take emojis out before BTOA
  }

  _getUserCharacterControls(): UntypedFormControl[] {
    return this.userCharacterCtrls.controls as UntypedFormControl[];
  }
}

export class DialogFrame {
  id = -1;
  text: string;
  poseId: number;
  bubbleType = 0;
  username = '';
  mergeNext = false;
  doNotTalk = false;
  goNext = false;
  poseAnimation = true;
  flipped = false;
  frameActions = [];
  frameFades = [];
  background = null;
  characterId = null;

  constructor(text: string, poseId: number, username?: string) {
    this.text = text;
    this.poseId = poseId;
    this.username = username ? username : '';
  }
}
