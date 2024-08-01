// slices/employeeManagementSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employeeList: [], // Ensure this is defined
    // other state properties
};

const employeeManagementSlice = createSlice({
    name: 'EmployeeManagement',
    initialState,
    reducers: {
        setEmployeeList(state, action) {
            state.employeeList = action.payload;
        },
        // other reducers
    },
});

export const { setEmployeeList } = employeeManagementSlice.actions;
export default employeeManagementSlice.reducer;
