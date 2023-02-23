import { Injectable } from '@angular/core';

// OVAKO IZGLEDA USER
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  address?: string;
}
// OVDE PRAVIMO USERE
// The @Injectable() decorator defines a
// class as a service in Angular and allows Angular to inject it into a component as a dependency
@Injectable()
export class UserService {
  isUserLoggedIn: boolean = false;
  currentUser: User = UserService.dummyUserList[0];

  static dummyUserList: Array<User> = [
    {
      id: 0,
      username: 'Aljosa',
      email: 'aljosagadjanskibozic@gmail.com',
      password: 'Kikiriki123!',
      dateOfBirth: new Date('2023-01-03 15:37'),
    },
    {
      id: 1,
      username: 'Milorad',
      email: 'milorad.bozic@yahoo.com',
      password: 'Bozic223',
      dateOfBirth: new Date('2023-01-03 16:22'),
    },
    {
      id: 3,
      username: 'test',
      email: 'test@gmail.com',
      password: 'test12345',
      dateOfBirth: new Date('2023-01-03 15:37'),
    },
  ];

  getUserName(user: User): string {
    return user.email;
  }

  getUserById(id: number): User {
    var foundUser!: User;
    UserService.dummyUserList.find((user) => {
      if (user.id == id) {
        foundUser = user;
      }
    })!;
    this.currentUser = foundUser;
    return foundUser;
  }

  getUser(userEmail: string): User {
    // return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;

    this.currentUser = UserService.dummyUserList.find(
      (userToFind) => userToFind.email == userEmail
    )!;
    return this.currentUser;
  }

  getUserByPassword(password: string): User {
    return UserService.dummyUserList.find((user) => user.password == password)!;
  }

  isPasswordCorrect(userEmail: string, password: string): boolean {
    return (
      UserService.dummyUserList.find(
        (user) => user.email == userEmail && user.password == password
      ) != undefined
    );
  }

  registerUser(
    email: string,
    username: string,
    password: string,
    dateOfBirth: Date
  ): User {
    var idCount: number = 0;
    UserService.dummyUserList.forEach((user) => {
      if (idCount < user.id) {
        idCount = user.id;
      }
    });

    var id = idCount++;

    var user: User = {
      id,
      username,
      email,
      password,
      dateOfBirth,
    };

    UserService.dummyUserList.push(user);
    this.currentUser = user;
    console.log(user);
    return user;
  }

  getCurrentUserId(): number {
    return this.currentUser.id;
  }

  getIsUserLoggedIn() : boolean {
    return this.isUserLoggedIn;
  }

  setIsUserLoggedIn(status: boolean) {
    this.isUserLoggedIn = status;
  }
}
