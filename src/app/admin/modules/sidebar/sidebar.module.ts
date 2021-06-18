import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { ProfilePreviewComponent } from './components/profile-preview/profile-preview.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
    ProfilePreviewComponent,
  ],
  exports: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
  ],
  bootstrap: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
