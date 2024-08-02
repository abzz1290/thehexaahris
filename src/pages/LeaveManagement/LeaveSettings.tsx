import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { getEmployees, updateLeaveSettings } from 'slices/thunk';
import TableContainer from 'Common/TableContainer';

interface Employee {
    id: number;
    name: string;
    gender: string;
    leaves?: number;
}

const LeaveSettings = () => {
    const dispatch = useDispatch<any>();

    const selectEmployeeData = createSelector(
        (state: any) => state.EmployeeManagement || {},
        (state) => ({
            employees: state.employeeList || []
        })
    );

    const { employees } = useSelector(selectEmployeeData);

    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [leaveSettings, setLeaveSettings] = useState<any>({});
    const [leaveSummary, setLeaveSummary] = useState<any[]>([]);

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);

    useEffect(() => {
        if (selectedEmployee) {
            setLeaveSettings({
                annual: 0,
                sick: 0,
                hospitalization: 0,
                maternity: selectedEmployee.gender === 'female' ? 0 : undefined
            });
        }
    }, [selectedEmployee]);

    const handleLeaveChange = (type: string, days: number) => {
        setLeaveSettings((prevSettings: any) => ({
            ...prevSettings,
            [type]: days
        }));
    };

    const handleEmployeeSelect = (id: number) => {
        const employee = employees.find((emp: Employee) => emp.id === id);
        setSelectedEmployee(employee || null);
    };

    const handleSave = () => {
        if (selectedEmployee) {
            setLeaveSummary((prevSummary: any[]) => [
                ...prevSummary,
                {
                    name: selectedEmployee.name,
                    annual: leaveSettings.annual,
                    sick: leaveSettings.sick,
                    hospitalization: leaveSettings.hospitalization,
                    maternity: leaveSettings.maternity,
                    assignee: 'HR'
                }
            ]);
            dispatch(updateLeaveSettings({ id: selectedEmployee.id, ...leaveSettings }));
            setSelectedEmployee(null);
            setLeaveSettings({});
        }
    };

    const columns = useMemo(() => [
        { header: 'Name', accessorKey: 'name' },
        { header: 'Annual', accessorKey: 'annual' },
        { header: 'Sick', accessorKey: 'sick' },
        { header: 'Hospitalization', accessorKey: 'hospitalization' },
        { header: 'Maternity', accessorKey: 'maternity' },
        { header: 'Assignee', accessorKey: 'assignee' }
    ], []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Leave Settings</h1>

            <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Select Employee:</label>
                <select
                    className="form-select w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => handleEmployeeSelect(parseInt(e.target.value))}
                    value={selectedEmployee?.id || ''}
                >
                    <option value="">Select an employee</option>
                    {employees.map((employee: Employee) => (
                        <option key={employee.id} value={employee.id}>
                            {employee.name}
                        </option>
                    ))}
                </select>
            </div>

            {selectedEmployee && (
                <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-4 border rounded-md shadow-sm">
                            <h2 className="text-lg font-semibold mb-2">Annual Leave</h2>
                            <input
                                type="number"
                                className="form-input w-full p-2 border border-gray-300 rounded-md"
                                value={leaveSettings.annual}
                                onChange={(e) => handleLeaveChange('annual', parseInt(e.target.value))}
                            />
                        </div>
                        <div className="p-4 border rounded-md shadow-sm">
                            <h2 className="text-lg font-semibold mb-2">Sick Leave</h2>
                            <input
                                type="number"
                                className="form-input w-full p-2 border border-gray-300 rounded-md"
                                value={leaveSettings.sick}
                                onChange={(e) => handleLeaveChange('sick', parseInt(e.target.value))}
                            />
                        </div>
                        <div className="p-4 border rounded-md shadow-sm">
                            <h2 className="text-lg font-semibold mb-2">Hospitalization Leave</h2>
                            <input
                                type="number"
                                className="form-input w-full p-2 border border-gray-300 rounded-md"
                                value={leaveSettings.hospitalization}
                                onChange={(e) => handleLeaveChange('hospitalization', parseInt(e.target.value))}
                            />
                        </div>
                        {selectedEmployee.gender === 'female' && (
                            <div className="p-4 border rounded-md shadow-sm">
                                <h2 className="text-lg font-semibold mb-2">Maternity Leave</h2>
                                <input
                                    type="number"
                                    className="form-input w-full p-2 border border-gray-300 rounded-md"
                                    value={leaveSettings.maternity || 0}
                                    onChange={(e) => handleLeaveChange('maternity', parseInt(e.target.value))}
                                />
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleSave}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Save Settings
                    </button>
                </>
            )}

            <h2 className="text-xl font-bold mt-8 mb-4">Leave Summary</h2>
            <TableContainer
                isPagination={true}
                columns={columns}
                data={leaveSummary}
                customPageSize={10}
                divclassName="overflow-x-auto"
                tableclassName="w-full whitespace-nowrap"
                theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200"
                thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
                tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
            />
        </div>
    );
};

export default LeaveSettings;
