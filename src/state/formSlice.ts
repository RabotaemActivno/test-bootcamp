import {createSlice} from '@reduxjs/toolkit'


export interface StateType {
    number:string,
    email:string,
    nickName: string,
    name: string,
    serName: string,
    sex: string
}

const initialState = {
    number:'',
    email:'',
    nickName: '',
    name: '',
    serName: '',
    sex: ''
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number = action.payload
        },
        addEmail: (state, action) => {
            state.email = action.payload
        },
        addNickName: (state, action) => {
            state.nickName = action.payload
        },
        addName: (state, action) => {
            state.name = action.payload
        },
        addSerName: (state, action) => {
            state.number = action.payload
        },
        addSex: (state, action) => {
            state.number = action.payload
        },
    }
})

export const {addNumber, addEmail, addName, addNickName, addSerName, addSex} = formSlice.actions
export default formSlice.reducer