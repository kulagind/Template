import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { ProfilePreviewComponent } from './components/profile-preview/profile-preview.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
    ProfilePreviewComponent,
  ],
  exports: [
    SidebarComponent,
    ProfilePreviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
    MatDialogModule,
  ],
  bootstrap: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
