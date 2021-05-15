import { Injectable } from "@angular/core";
import { BusinessAuthentication } from "src/app/models/business/business-authentication";
import { BusinessCreateAccount } from "src/app/models/business/business-create-account";
import { BusinessModel } from "src/app/models/business/business.models";
import { AppConnect } from "src/app/utils/Connection";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private connect: AppConnect) {
    }
    /**
     * 
     * @param username 
     * @param password 
     * @returns 
     */
    onLogin(username: String, password: String): Promise<BusinessAuthentication> {
        this.connect.endPoint = "/authentication/";
        return this.connect.httpPost({
            "username": username,
            "password": password
        });
    }



    /**
     * 
     * @param username 
     * @param password 
     * @param business 
     * @returns 
     */
    onCreateAccount(username: string, password: string, business: BusinessModel): Promise<BusinessCreateAccount> {
        this.connect.endPoint = "/create-account/";
        return this.connect.httpPost({
            "username": username,
            "password": password,
            "business_name": business.name,
            "business_identification": business.identification,
            "city": business.city,
            "phone": business.phone,
            "person_type": business.person_type,
            "address": business.address,
            "country": business.country.pk,
            "area": business.area != null ? business.area.pk : null,
        });

    }
    /**
     * 
     * @param email 
     * @returns 
     */
    onRequestPassword(email: string) {
        this.connect.endPoint = "/auth/user/recovery-password/";
        return this.connect.httpPost({
            email: email
        }).then((response: Map<string, any>) => response.get("success"));

    }
    /**
     * 
     * @param email 
     * @param code 
     */
    public onValidateCode(email: string, code: string): Promise<string> {
        this.connect.endPoint = "/auth/user/recovery-password-validate-number/";
        return this.connect.httpPost({
            "email": email,
            "code": code,
        }).then((response: Map<string, any>) => response.get("token_validate"));

    }
    /**
     * 
     * @param password 
     * @param token 
     * @returns true|false 
     * 
     */
    public onChangePassword(password: string, token: string): Promise<boolean> {
        this.connect.endPoint = "/auth/user/change-password-from-token/";
        return this.connect.httpPost({
            password: password,
            token_validate: token
        }).then((response: Map<string, any>) => response.get("success"));
    }

}