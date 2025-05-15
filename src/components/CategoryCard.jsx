import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "./ui/card";

const CategoryCard = ({ title, icon: Icon, category, expenses }) => {
    const categoryExpenses = expenses.filter((e) => e.category === category);
    const total = categoryExpenses.reduce((acc, cur) => acc + cur.amount, 0);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        {Icon && <Icon size={24} />}
                    </CardDescription>
                </div>
                <p className="text-lg font-semibold text-green-600">
                    Total: ${total.toFixed(2)}
                </p>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {categoryExpenses.map((exp, index) => (
                        <li key={index} className="text-sm">
                            <span className="font-medium">
                                ${exp.amount.toFixed(2)}
                            </span>{" "}
                            - {exp.description}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
