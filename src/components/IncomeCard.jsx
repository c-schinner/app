import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "./ui/card";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const IncomeCard = () => {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Total Income</CardTitle>
                    <CardDescription>
                        Enter your total Monthly Income
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="amount">Amount</Label>
                                <Input id="amount" placeholder="Amount" />
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

export default IncomeCard;
