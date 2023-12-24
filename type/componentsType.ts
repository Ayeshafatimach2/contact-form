export type contactTypes = {
    name: string,
    email:string,
    phone:string,
    address:string,
    city:string,
    state:string,
    zip:string,
    subscribe:boolean,
    message:string,

}


export type onChangeEventType = {
    target: {
      type: string;
      checked?: boolean;
      value: string;
      name: string;
    };
  };
  