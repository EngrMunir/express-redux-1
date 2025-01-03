
const logger =(state) =>(next)=>(action)=>{
    console.info(state.getState());
    console.group(action.type);

    const result = next(action);

    console.info("Next state", state.getState());
    console.groupEnd();

    return result;
}

export default logger;