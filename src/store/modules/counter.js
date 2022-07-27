import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        list: []
    },
    reducers: {
        add(state, action) {
            state.count++
        },
        pus(state) {
            state.list.push(Math.floor(Math.random() * 100))
        },
        del(state, action) {
            console.log(state, action)
            state.list.splice(action.payload, 1)
        }
    }
})

export const { add, pus, del } = counter.actions // 导出action函数
export default counter.reducer // 导出reducer,创建store 

export const addAsync = () => {
    return async (dispatch, getState) => {
        setTimeout(() => {
            dispatch(add())
        }, 3000)
    }
}