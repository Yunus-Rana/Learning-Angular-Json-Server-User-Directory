import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UsersResponse } from './user-data-types';

@Injectable({ providedIn: 'root' })
export class UserService {
    url = "http://localhost:3000/users"
    constructor(private http: HttpClient) {}

    getUsers(){
        return this.http.get<User[] | UsersResponse>(this.url)
    }

    saveUsers(data: User){
        return this.http.post<User>(this.url, data)
    }

    deleteUser(id: number | string) {
        return this.http.delete<void>(`${this.url}/${id}`)
    }

}
