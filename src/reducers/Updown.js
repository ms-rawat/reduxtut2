const initialState=0;

const changethenumber=(state=initialState,action)=>{
switch(action.type){
 case "INCRIMENT":return state + 1;
 case "DICRIMENT" :return state - 1; 
 default : return state;
}
}
export default changethenumber;