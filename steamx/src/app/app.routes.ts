import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TileCleaningComponent } from './tile-cleaning/tile-cleaning.component';
import { UphoCleaningComponent } from './upho-cleaning/upho-cleaning.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { HwWorkComponent } from './hw-work/hw-work.component';
import { StaffingComponent } from './staffing/staffing.component';
import { HiringComponent } from './hiring/hiring.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'tile-cleaning', component: TileCleaningComponent, pathMatch: 'full' },
    { path: 'upho', component: UphoCleaningComponent, pathMatch: 'full' },
    { path: 'ourstory', component: OurStoryComponent, pathMatch: 'full' },
    { path: 'hwWork', component: HwWorkComponent, pathMatch: 'full' },
    { path: 'staffing', component: StaffingComponent, pathMatch: 'full' },
    { path: 'hiring', component: HiringComponent, pathMatch: 'full' },
    { path: 'contact', component: ContactComponent, pathMatch: 'full' }
];
