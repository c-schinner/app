import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Label } from "@/components/ui/label";
import { FaMoneyBillWave } from "react-icons/fa";
const TotalCard = ({ title, totalAmount }) => {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        <FaMoneyBillWave size={24} />
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
                                    Total: ${totalAmount}
                                </Label>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    );
};

export default TotalCard;
