export interface LogIn{
    email_id:string;
    password:string;
}
export interface Searchitem{
    name:string;
  }
  export interface Viewevent{
    event_name:string;
    created_at:string;
    
  }
  export interface AddService{
    target: HTMLInputElement;
    service_name:string;
    price:number;
    service_description:string;
  }
  export interface Addbooking{
    event_service_id:number;
    name:string;
    email_id:string;
    mobile_number:string;
    eventDate:string;
    event_starting_time:string;
    event_finish_time:string;
    address:string;
    type_of_event:string;
    additional_information:string;
    status:number;
  
  
  }
  export interface UserTable{
    name:string;
    mobile_number:string;
    email_id:string;
    created_at:string;
  }
  export interface AddUser{
    name:string;
    mobile_number:string;
    email_id:string;
    password:string;
    role:'admin' | 'users';
  //status:number;
  }
  export interface EditUser{
    name:string;
    mobile_number:string;
    email_id:string;
  }
  export interface ForgotPassWord{
    email_id: string;
    password:string;
    confirm_password:string;
    
  }
  
  export interface CompanyForm{
    id:number;
    company_name:string;
    company_reg_no:number;
    physical_address:string;
    company_email:string;
    country:string;
    mobile_number:number;
  }