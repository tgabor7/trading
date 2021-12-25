export const convertDate = (date: string)=>{
    return date.replace(/:| |-/g, '');
}
export const convertToSecs = (date: string)=> {
    return parseInt(date.split("-")[0]) * 31536000 + parseInt(date.split("-")[1]) * 2628000 + parseInt(date.split("-")[2]) * 86400;
}
export const getFutureDates = (future: number)=>{
    const today = new Date().getTime();
    const futureTime = today + future;
    
}