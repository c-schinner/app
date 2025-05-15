import { useState } from "react";
import { DollarSign, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CategoryCard = ({
    title,
    icon: IconComponent,
    expenses = [],
    onDelete,
    budget,
    handleUpdateBudget,
}) => {
    const total = expenses.reduce((acc, cur) => acc + cur.amount, 0);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditingBudget, setIsEditingBudget] = useState(false);
    const [editableBudget, setEditableBudget] = useState(budget);

    const toggleOpen = () => setIsOpen((prev) => !prev);
    const percentUsed = budget ? (total / budget) * 100 : 0;
    const percentWidth = `${Math.min(percentUsed, 100)}%`;

    const barColor =
        percentUsed >= 100
            ? "bg-red-500"
            : percentUsed >= 75
            ? "bg-yellow-400"
            : "bg-green-500";

    return (
        <Card
            className="w-[350px] shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            onClick={toggleOpen}
        >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-2">
                    {IconComponent ? (
                        <IconComponent className="h-5 w-5 text-gray-500" />
                    ) : (
                        <DollarSign className="h-5 w-5 text-gray-500" />
                    )}
                    <CardTitle className="text-lg font-medium">
                        {title}
                    </CardTitle>
                </div>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </CardHeader>

            <CardContent>
                <div className="text-2xl font-bold">${total}</div>

                <div className="mt-2">
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                        <span>Used</span>
                        <div className="flex items-center gap-2">
                            {isEditingBudget ? (
                                <>
                                    <input
                                        type="number"
                                        className="w-20 px-1 border rounded text-sm"
                                        value={editableBudget}
                                        onChange={(e) =>
                                            setEditableBudget(
                                                Number(e.target.value)
                                            )
                                        }
                                    />
                                    <button
                                        onClick={() => {
                                            setIsEditingBudget(false);
                                            handleUpdateBudget(editableBudget);
                                        }}
                                        className="text-xs text-blue-600"
                                    >
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span>${budget}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // prevent toggle
                                            setIsEditingBudget(true);
                                        }}
                                        className="text-xs text-blue-600"
                                    >
                                        Edit
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                        <div
                            className={`h-full rounded-full ${barColor} transition-all duration-500 ease-in-out`}
                            style={{ width: percentWidth }}
                        />
                    </div>

                    <p className="text-xs text-muted-foreground mt-1">
                        {percentUsed >= 100
                            ? "Over budget"
                            : `${percentUsed.toFixed(0)}% of budget used`}
                    </p>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                    Spent this month
                </p>

                {/* Expense List */}
                <div
                    className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    {expenses.length > 0 ? (
                        expenses.map((expense, index) => (
                            <div
                                key={index}
                                className="border rounded p-2 flex justify-between items-center text-sm bg-white"
                            >
                                <div>
                                    <div className="text-gray-700">
                                        {expense.description}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        ${expense.amount}
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // prevent toggle
                                        onDelete(index);
                                    }}
                                    className="text-red-500 text-xs hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-xs text-gray-500 italic">
                            No expenses yet.
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
