// LeaveSettings.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import Modal from 'Common/Components/Modal';
import { getEmployees, updateLeaveSettings } from 'slices/thunk';

const LeaveSettings = () => {
    const dispatch = useDispatch<any>();

    // Selector to get employee data
    const selectEmployeeData = createSelector(
        (state: any) => state.EmployeeManagement || {}, 
        (state) => ({
            employees: state.employeeList || [] 
        })
    );

    const { employees } = useSelector(selectEmployeeData);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [leaveSettings, setLeaveSettings] = useState<any[]>([]);

    useEffect(() => {
        dispatch(getEmployees()); // Fetch employee data
    }, [dispatch]);

    useEffect(() => {
        setLeaveSettings(employees.map((employee: any) => ({
            id: employee.id,
            name: employee.name,
            leaves: employee.leaves || 0
        })));
    }, [employees]);

    const handleLeaveChange = (id: number, leaves: number) => {
        setLeaveSettings(prevSettings =>
            prevSettings.map(setting =>
                setting.id === id ? { ...setting, leaves } : setting
            )
        );
    };

    const handleSave = () => {
        dispatch(updateLeaveSettings(leaveSettings));
        setShowModal(false);
    };

    return (
        <React.Fragment>
            <button onClick={() => setShowModal(true)} className="btn btn-primary">
                Manage Leave Settings
            </button>

            <Modal show={showModal} onHide={() => setShowModal(false)} className="max-w-lg">
                <div className="relative p-5">
                    <div className="mb-5">
                        <h5 className="text-lg font-semibold text-slate-700 dark:text-zink-100">Leave Settings</h5>
                    </div>
                    <div className="p-4 bg-slate-100 dark:bg-zink-600 rounded-lg">
                        {leaveSettings.map(employee => (
                            <div key={employee.id} className="mb-4 flex items-center">
                                <div className="flex-1">{employee.name}</div>
                                <input
                                    type="number"
                                    value={employee.leaves}
                                    onChange={(e) => handleLeaveChange(employee.id, parseInt(e.target.value))}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500"
                                />
                            </div>
                        ))}
                        <button onClick={handleSave} className="btn btn-primary">
                            Save Changes
                        </button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default LeaveSettings;
