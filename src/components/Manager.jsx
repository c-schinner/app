import { useState } from "react";
import { Calendar } from "./ui/calendar";
import ExpenseCard from "./ExpenseCard";
import TotalCard from "./TotalCard";
import SavingsCard from "./SavingsCard";
import IncomeCard from "./IncomeCard";
import { MdOutlinePower } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdOutlineTheaters } from "react-icons/md";
import CategoryCard from "./CategoryCard.jsx";

const Manager = () => {
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (newExpense) => {
        setExpenses((prev) => [...prev, newExpense]);
    };

    return (
        <>
            <div className="flex justify-center">
                <h1>Monthly Expense Tracker</h1>
            </div>
            <div className="border-4 border-black mx-auto p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-evenly items-center">
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
                        onAddExpense={handleAddExpense}
                    />
                </div>
                <div className="flex flex-col mt-6 space-y-8">
                    <TotalCard title="Total Income" />
                    <SavingsCard title="Monthly Savings" />
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-2 gap-4">
                <CategoryCard
                    title="Home"
                    category="home"
                    expenses={expenses}
                    icon={MdOutlineHome}
                />
                <CategoryCard
                    title="Grocery"
                    category="grocery"
                    expenses={expenses}
                    icon={MdOutlineLocalGroceryStore}
                />
                <CategoryCard
                    title="Entertainment"
                    category="entertainment"
                    expenses={expenses}
                    icon={MdOutlineTheaters}
                />
                <CategoryCard
                    title="Utilities"
                    category="utilities"
                    expenses={expenses}
                    icon={MdOutlinePower}
                />
            </div>
        </>
    );
};

export default Manager;
