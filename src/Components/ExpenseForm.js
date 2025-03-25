
import "./ExpenseForm.css"
import React, { useState } from "react"
import database from './FireBase';
import { ref, set } from 'firebase/database';

const ExpenseForm = ({ onAddRow }) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [img, setimg] = useState(null);


    const titleChangeHandeler = (event) => {

        console.log(event)
        setTitle(event.target.value);
    };
    const AmountChangeHandeler = (event) => {

        setAmount(event.target.value);
    };
    const DateChangeHandeler = (event) => {

        setDate(event.target.value);
    };

    const ImgChangeHandeler = (event) => {
        setimg(event.target.files[0]);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            name: title, // Changed from title to name
            flag: URL.createObjectURL(img), // Changed from image to flag
            amount: amount,
            date: new Date(date),
        };

        onAddRow(expenseData);

        const uniqueKey = Date.now();

        // שליחת הנתונים
       /* set(ref(database, 'objects/' + uniqueKey), expenseData)
            .then(() => {
                console.log("Data sent successfully!");
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            }); */

        setTitle("");
        setAmount("");
        setDate("");
        setimg(null);

        // fetch(
        //     "http://localhost:3000/addToMongo1/" + title + "/" + amount + "/" + date
        // ).catch((err) => console.log(err));
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandeler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={AmountChangeHandeler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={DateChangeHandeler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Image</label>
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png, .svg"
                        onChange={ImgChangeHandeler}
                    />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
            </div>
        </form>
    );
};
export default ExpenseForm