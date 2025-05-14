import React from "react";
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

const ExpenseCard = ({ title, description }) => {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="amount">Amount</Label>
                                <Input id="amount" placeholder="Amount" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="expense">Expense</Label>
                                <Select>
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
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Submit</Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default ExpenseCard;
