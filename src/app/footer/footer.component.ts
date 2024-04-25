import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private profileService: ProfileService){}

  date: Date = new Date();

  profile?: Profile;

  ngOnInit(){
    this.profile = this.profileService.getProfile();
  }

}
