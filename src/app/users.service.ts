import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  size = 8;
  constructor(private http: HttpClient) {}


  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
      .pipe(
        map(res => res.results),
        map(users => users.map(u => {
          return {
            name: `${u.name.first} ${u.name.last}`,
            image: u.picture.large,
            geo: `${u.location.city} ${u.location.state} ${u.location.street}`
          };
        }))
        );
  }

  setSize(size) {
    this.size = size;
  }
}
