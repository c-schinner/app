import React from "react";
import { Calendar } from "./ui/calendar";
import ExpenseCard from "./ExpenseCard";
import TotalCard from "./TotalCard";
import SavingsCard from "./SavingsCard";
import IncomeCard from "./IncomeCard";
import Home from "./Home";
import Grocery from "./Grocery.jsx";
import Entertainment from "./Entertainment.jsx";
import Utilities from "./Utilities.jsx";

const Manager = () => {
    return (
        <>
            <div className="flex justify-center">
                <h1>Monthly Expense Tracker</h1>
            </div>
            <div className="border-4 border-black mx-auto p-4 flex flex-row space-x-4 justify-evenly">
                <div className="w-[250px]">
                    <Calendar className="rounded-md border text-white bg-black" />
                </div>
                <div className="">
                    <IncomeCard />
                </div>
                <div>
                    <ExpenseCard
                        title="Monthly Expenses"
                        description="Enter Your Total Expense Amount"
                    />
                </div>
                <div className="flex flex-col mt-6 space-y-8">
                    <TotalCard
                        title="Total Income"
                        description="This is your total monthly income."
                    />
                    <SavingsCard
                        title="Monthly Savings"
                        description="This is your total monthly savings amount."
                    />
                </div>
            </div>
            <div className="flex justify-center mt-2 space-x-2 space-between">
                <Home />
                <Grocery />
                <Entertainment />
                <Utilities />
            </div>
        </>
    );
};

export default Manager;
