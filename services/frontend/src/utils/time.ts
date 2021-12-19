export const convertDate = (date: string)=>{
    return date.replace(/:| |-/g, '');
}


export const getFutureDates = (future: number)=>{
    const today = new Date().getTime();
    const futureTime = today + future;
    
}