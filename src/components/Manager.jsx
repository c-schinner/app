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
import SummaryCard from "./SummaryCard.jsx";

const Manager = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalBudgetSummary, setTotalBudgetSummary] = useState(1000);

    const handleUpdateTotalBudget = (newBudget) => {
        setTotalBudgetSummary(newBudget);
    };

    const [expensesByCategory, setExpensesByCategory] = useState({
        home: [],
        grocery: [],
        entertainment: [],
        utilities: [],
        saving: [],
    });
    const [categoryBudgets, setCategoryBudgets] = useState({
        home: 1000,
        grocery: 400,
        entertainment: 200,
        utilities: 250,
    });

    const totalSpent = Object.values(expensesByCategory)
        .flat()
        .reduce((sum, e) => sum + e.amount, 0);
    const totalBudget = Object.values(categoryBudgets).reduce(
        (sum, b) => sum + b,
        0
    );

    const handleUpdateBudget = (category, newBudget) => {
        setCategoryBudgets((prev) => ({ ...prev, [category]: newBudget }));
    };

    const handleTotalIncome = (amount) => {
        setTotalIncome(amount);
    };

    const handleAddExpense = (category, amount, desc) => {
        setExpensesByCategory((prev) => ({
            ...prev,
            [category]: [...prev[category], { amount, description: desc }],
        }));
    };

    const handleDeleteExpense = (category, index) => {
        setExpensesByCategory((prev) => {
            const updated = [...prev[category]];
            updated.splice(index, 1);
            return {
                ...prev,
                [category]: updated,
            };
        });
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
                <div className="space-y-2">
                    <IncomeCard handleTotalIncome={handleTotalIncome} />
                    <SummaryCard
                        totalSpent={totalSpent}
                        totalBudget={totalBudgetSummary}
                        onUpdateBudget={handleUpdateTotalBudget}
                        totalBudgetSummary={totalBudgetSummary}
                    />
                </div>
                <div>
                    <ExpenseCard
                        title="Monthly Expenses"
                        description="Enter Your Total Expense Amount"
                        onAddExpense={handleAddExpense}
                    />
                </div>
                <div className="flex flex-col mt-6 space-y-8">
                    <TotalCard title="Total Income" totalAmount={totalIncome} />
                    <SavingsCard
                        title="Monthly Savings"
                        expense={expensesByCategory["saving"]}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 justify-center">
                <CategoryCard
                    title="Home"
                    category="home"
                    total={expensesByCategory.home.reduce(
                        (acc, exp) => acc + exp.amount,
                        0
                    )}
                    expenses={expensesByCategory["home"] || []}
                    onDelete={(index) => handleDeleteExpense("home", index)}
                    icon={MdOutlineHome}
                    budget={categoryBudgets.home}
                    handleUpdateBudget={(newBudget) =>
                        handleUpdateBudget("home", newBudget)
                    }
                />
                <CategoryCard
                    title="Grocery"
                    category="grocery"
                    total={expensesByCategory.grocery.reduce(
                        (acc, exp) => acc + exp.amount,
                        0
                    )}
                    expenses={expensesByCategory["grocery"] || []}
                    onDelete={(index) => handleDeleteExpense("grocery", index)}
                    icon={MdOutlineLocalGroceryStore}
                    budget={categoryBudgets.grocery}
                    handleUpdateBudget={(newBudget) =>
                        handleUpdateBudget("grocery", newBudget)
                    }
                />
                <CategoryCard
                    title="Entertainment"
                    category="entertainment"
                    total={expensesByCategory.entertainment.reduce(
                        (acc, exp) => acc + exp.amount,
                        0
                    )}
                    expenses={expensesByCategory["entertainment"] || []}
                    onDelete={(index) =>
                        handleDeleteExpense("entertainment", index)
                    }
                    icon={MdOutlineTheaters}
                    budget={categoryBudgets.entertainment}
                    handleUpdateBudget={(newBudget) =>
                        handleUpdateBudget("entertainment", newBudget)
                    }
                />
                <CategoryCard
                    title="Utilities"
                    category="utilities"
                    total={expensesByCategory.utilities.reduce(
                        (acc, exp) => acc + exp.amount,
                        0
                    )}
                    expenses={expensesByCategory["utilities"] || []}
                    onDelete={(index) =>
                        handleDeleteExpense("utilities", index)
                    }
                    icon={MdOutlinePower}
                    budget={categoryBudgets.utilities}
                    handleUpdateBudget={(newBudget) =>
                        handleUpdateBudget("utilities", newBudget)
                    }
                />
            </div>
        </>
    );
};

export default Manager;
