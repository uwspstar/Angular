
export interface User {
    id: number;
    userName?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    roles: string[];
}


export enum Role {

    Admin = "ADMIN", // create other user
    Supper = "SUPPER", // push to production
    Regular = "REGULAR" //DEFAULT NO push to production
    //Qa = "QA", 
    //Dev = "DEVELOPER",
    //Pm = "PM" 
}