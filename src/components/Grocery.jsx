import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Label } from "@/components/ui/label";
const Grocery = () => {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Grocery</CardTitle>
                    <CardDescription>
                        These are the Grocery related Expenses
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label
                                    className="text-2xl text-bold"
                                    htmlFor="money"
                                >
                                    $5000
                                </Label>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    );
};

export default Grocery;
