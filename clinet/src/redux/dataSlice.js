import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//本slice掌管數據
//data:axios 從資料庫
//newData:後台搜尋後

//給初值
const initialState = {
  data: [],
  status: [], //fetch資料時的狀態(success,padding,error)
  newData: [],
};

//fetch data
export const dataFetch = createAsyncThunk("data/dataFetch", async () => {
  try {
    const rep = await axios.get("http://localhost:3001/data");
    return rep.data;
  } catch (error) {
    console.log(error);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    search: (state, action) => {
      state.newData = state.data.filter((v) => {
        if (!action.payload) {
          return v;
        }
        return (
          v.name?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.city?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.address?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.foodtype?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag1?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag2?.toLowerCase().includes(action.payload.toLowerCase()) ||
          v.tag3?.toLowerCase().includes(action.payload.toLowerCase())
        );
      });
    },
    createSdata: (state, action) => {
      state.newData.unshift(action.payload); //前面新增一筆
    },
    editSdata: (state, action) => {
      state.newData = state.newData.map((v, i) => {
        //data巡覽出來 return把v做改變
        return v.id == action.payload.id ? action.payload : v;
      });
    },
    deleteSdata: (state, action) => {
      state.newData = state.newData.filter((v, i) => {
        return v.id != action.payload;
      });
    },
  },
  extraReducers: {
    [dataFetch.padding]: (state, action) => {
      state.status = "padding";
    },
    [dataFetch.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.newData = action.payload;
      state.status = "success";
    },
    [dataFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { search, createSdata, deleteSdata, editSdata } = dataSlice.actions;

export default dataSlice.reducer;
