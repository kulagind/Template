import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { complexProfilePreviewAnimation } from './profile-preview.animation';
import { ProfilePreview } from '../../types/profile-preview.type';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss'],
  animations: [ ...complexProfilePreviewAnimation()]
})
export class ProfilePreviewComponent implements OnInit {

  @Input() public profile!: Readonly<Partial<ProfilePreview>>;

  constructor() { }

  public ngOnInit(): void { }

}
