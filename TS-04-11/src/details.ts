export interface getDetails{
    count:string;
    name:string;
    country:[{
        country_id:string, 
        probability:number
    }];
}