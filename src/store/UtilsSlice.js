import { createSlice } from "@reduxjs/toolkit";

const hashValue =
  process.env.REACT_APP_MARVEL_TS +
  process.env.REACT_APP_MARVEL_PRIVATE_KEY +
  process.env.REACT_APP_MARVEL_PUBLIC_KEY;

const md5 = require("md5");

const initialUtilsState = {
  hash: hashValue,
  ts: process.env.REACT_APP_MARVEL_TS,
};

const UtilsSlice = createSlice({
  name: "utils",
  initialState: initialUtilsState,
  reducers: {},
});

export default UtilsSlice;
