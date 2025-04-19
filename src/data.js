export const API_KEY = 'AIzaSyClzNr9Wg5aWbG_ZqxPuYZy7UzaWdrT2BI';

export const valueConverter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000) + "K"
    }else{
        return value;
    }
}