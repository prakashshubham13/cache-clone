import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data:"",
    bnbMode:true,
    logicList:['lane','stops'],
    logicSet:{
        lane:[["*","*","*","*","*","US"]]
    },
    dragItem:[],
    imports:[{key:"100",value:"US LANE"},{key:"101",value:"CA LANE"},{key:"102",value:"TX LANE"}]
};

export const cachetSlice = createSlice({
    name:"cachet",
    initialState,
    reducers:{
        toogleMode: (state, action) => {
            console.log(action);
            state.bnbMode = action.payload;
        },
        addDragItem: (state, action) => {
            state.dragItem = action.payload;
        },
        updateLaneAdd: (state, action) => {
          state.logicSet.lane.push(action.payload);
        }
    }
})

export const { toogleMode, addDragItem, updateLaneAdd } = cachetSlice.actions;

export default cachetSlice.reducer