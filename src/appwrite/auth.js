import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";
export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId); 
            
            this.account = new Account(this.client);    
    }

    async createAccount({email, password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //calling direct login
                alert('Your account has been created successfully')
                return await this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}){
        try {
             return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser ::error",error);
        }
        return null;
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout ::error",error);
        }
        return null;
    }
    async createOAuth2Session() {
        try {
          await this.account.createOAuth2Session('google', 'https://anim-blog.vercel.app/', 'https://anim-blog.vercel.app/');
        } catch (error) {
          console.log("Appwrite service :: createOAuth2Session ::error", error);
        }
      }
}


const authService = new AuthService()
export default authService

