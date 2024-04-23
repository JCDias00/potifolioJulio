import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
       
      email: 'juliocesarcardosodias211@outlook.com',
      name: 'Júlio César',
      whatsApp: 'https://api.whatsapp.com/send?phone=5562996172261&text=Ol%C3%A1,%20estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20',
      linkedIn: 'https://www.linkedin.com/in/julio-cesar-cardoso-38a417264/',
    }

    return profile;
  }
}
