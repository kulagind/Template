import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePreviewComponent } from '../components/profile-preview/profile-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfilePreviewComponent', () => {
  let component: ProfilePreviewComponent;
  let fixture: ComponentFixture<ProfilePreviewComponent>;
  const options = { name: 'John Doe', email: 'mail@gmail.com' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePreviewComponent],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Rendering name with valid data', () => {

    component.profile = options;
    fixture.detectChanges();

    const profile = fixture.nativeElement;

    const headline = profile.querySelector('.profile-preview-text-name');
    expect(headline.textContent).toEqual('John Doe');
  });

  it('Rendering name with not valid data', () => {

    component.profile = { name: null, email: 'mail@gmail.com' };
    fixture.detectChanges();

    const profile = fixture.nativeElement;

    const headline = profile.querySelector('.profile-preview-text-name');
    expect(headline.textContent).toEqual('');

  });

  it('Rendering mail with valid data', () => {

    component.profile = options;
    fixture.detectChanges();

    const profile = fixture.nativeElement;

    const headline = profile.querySelector('.profile-preview-text-email');
    expect(headline.textContent).toEqual('mail@gmail.com');
  });

  it('Rendering mail with not valid data', () => {

    component.profile = { email: null, name: 'John Doe' };
    fixture.detectChanges();

    const profile = fixture.nativeElement;

    const headline = profile.querySelector('.profile-preview-text-email');
    expect(headline.textContent).toEqual('');
  });

});
