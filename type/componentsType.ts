export type contactTypes = {
    name: string,
    email:string,
    phone:number,
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
  