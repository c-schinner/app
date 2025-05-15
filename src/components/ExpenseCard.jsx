import React from "react";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "./ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ExpenseCard = ({ title, description, onAddExpense }) => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount)) return;

        onAddExpense(category, parsedAmount, desc);
        setAmount("");
        setCategory("");
        setDesc("");
    };

    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="amount">Amount</Label>
                                <Input
                                    id="amount"
                                    placeholder="Amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="expense">Expense</Label>
                                <Select
                                    value={category}
                                    onValueChange={setCategory}
                                >
                                    <SelectTrigger id="expense">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="home">
                                            Home
                                        </SelectItem>
                                        <SelectItem value="grocery">
                                            Grocery
                                        </SelectItem>
                                        <SelectItem value="entertainment">
                                            Entertainment
                                        </SelectItem>
                                        <SelectItem value="utilities">
                                            Utilities
                                        </SelectItem>
                                        <SelectItem value="saving">
                                            Saving
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    placeholder="Description"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <Button
                                variant="outline"
                                type="button"
                                onClick={() => {
                                    setAmount("");
                                    setCategory("");
                                    setDesc("");
                                }}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    );
};

export default ExpenseCard;
