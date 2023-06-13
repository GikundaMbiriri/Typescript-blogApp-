export interface Post{
    title:string,
    body:string,
    date:Date|any,
    userId:string,
    id:number|string,
    reactions:{
        thumbsUp:number,
        wow:number,
        heart:number,
        rocket:number,
        coffee:number
    },

}
export interface User{
    username:string,
    phone:string,
    website:string,
    name:string,
    id:number,
    email:string,
    company:{
        bs:string,
        catchPhrase:string,
        name:string
    },
    address:{
        city:string,
        geo:{
            lat:string,
            lng:string
        },
        street:string,
        suite:string,
        zipCode:string
    }
}