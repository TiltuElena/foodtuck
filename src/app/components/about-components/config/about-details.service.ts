import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AboutDetailsService {
  constructor(private http: HttpClient) {}
  private partnersUrl = 'http://localhost:1337/api/about-partners';
  private teamMembersUrl = 'http://localhost:1337/api/about-team-members';
  private menuItemsUrl = 'http://localhost:1337/api/about-menu-items';
  private itemsUrl = 'http://localhost:1337/api/about-items'

  getAboutPartners() {
    return this.http.get(this.partnersUrl);
  }

  getAboutTeamMembers() {
    return this.http.get(this.teamMembersUrl);
  }

  getAboutMenuItems() {
    return this.http.get(this.menuItemsUrl);
  }

  getAboutItems() {
    return this.http.get(this.itemsUrl);
  }
}
