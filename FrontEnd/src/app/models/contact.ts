export class Contact {
    id?:number = 0
    firstname: string = ""
    lastname: string = ""
    gender: string = ""
    dob: string = ""
    email?: string = ""
    phone?: string = ""
    city?: string = ""
    state?: string = ""
    country?: string = ""
    picture?: string="./assets/images/1.jpg"
    constructor(id:number, fn:string,ln:string,gen:string,dob:string,email:string,phone:string,city:string,state:string,
        country:string, picture:string){
            this.id = id
            this.firstname = fn
            this.lastname = ln
            this.gender = gen
            this.dob = dob
            this.email = email
            this.phone = phone
            this.city = city
            this.state = state
            this.country = country
            this.picture = picture
    }
}
