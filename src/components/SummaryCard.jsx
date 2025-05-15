import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const SummaryCard = ({ totalSpent, totalBudgetSummary, onUpdateBudget }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableBudget, setEditableBudget] = useState(totalBudgetSummary);

    const percentUsed = (totalSpent / totalBudgetSummary) * 100;

    const handleSave = () => {
        onUpdateBudget(editableBudget);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditableBudget(totalBudgetSummary);
        setIsEditing(false);
    };

    return (
        <Card className="w-[350px] bg-neutral-50">
            <CardHeader>
                <CardTitle>Budget Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-lg font-semibold flex items-center gap-2">
                    <span>${totalSpent} / </span>

                    {isEditing ? (
                        <>
                            <input
                                type="number"
                                value={editableBudget}
                                onChange={(e) =>
                                    setEditableBudget(Number(e.target.value))
                                }
                                className="border px-2 py-1 rounded w-24"
                                autoFocus
                            />
                            <button
                                onClick={handleSave}
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="text-gray-600 hover:underline text-sm"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <span>${totalBudgetSummary}</span>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="text-blue-600 hover:underline text-sm ml-2"
                            >
                                Edit
                            </button>
                        </>
                    )}
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                    <div
                        className={`h-full rounded-full ${
                            percentUsed >= 100
                                ? "bg-red-500"
                                : percentUsed >= 75
                                ? "bg-yellow-400"
                                : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(percentUsed, 100)}%` }}
                    />
                </div>

                <p className="text-sm text-muted-foreground mt-1">
                    {percentUsed.toFixed(0)}% of your total budget used
                </p>
            </CardContent>
        </Card>
    );
};

export default SummaryCard;
