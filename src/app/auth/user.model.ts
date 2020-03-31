export class User{
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date 
    ){}

    
    public get token() : string {
        if(!this._token || new Date() > this._tokenExpirationDate){
            return null;
        }
        else{
            return this._token;
        }
    }
    
}