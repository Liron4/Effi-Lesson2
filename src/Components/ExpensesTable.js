//import ExpenseItem from './ExpenseItem';
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import ExpenseItemTable from './ExpenseItemTable';
import './ExpensesTable.css'

function ExpensesTable(props) {
    const [rows, setRows] = useState(props.items);

    const handleAddRow = (newRow) => {
        setRows([...rows, newRow]);
    };

    return (
        <div className='expenses'>
            <ExpenseForm onAddRow={handleAddRow} />
            <div className="expense-grid">
                {rows.map((rowData, index) => (
                    <ExpenseItemTable
                        key={index}
                        name={rowData.name}
                        flag={rowData.flag}

                    />
                ))}
            </div>
        </div>

    );
}

export default ExpensesTable;
