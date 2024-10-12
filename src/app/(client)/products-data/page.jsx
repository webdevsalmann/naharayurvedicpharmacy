"use client"
import Section, { SectionBody, SectionHeading } from "@/components/section/section";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { products } from "@/lib/data/database";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

export default function Page() {
    const [filters, setFilters] = useState({
        category: true,
        name: true,
        hindiName: true,
        description: true,
        indication: true,
        ingredients: true,
        dose: true,
        pricing: true,
    });

    const tableHeaders = {
        category: "Category",
        name: "Name",
        hindiName: "Hindi Name",
        description: "Description",
        indication: "Indication",
        ingredients: "Ingredients",
        dose: "Dose",
        pricing: "Pricing",
    };

    const handleFilterChange = (key) => {
        setFilters(prev => ({ ...prev, [key]: !prev[key] }));
    };

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    return (
        <main>
            <Section>
                <SectionHeading>
                    <h1 className="no-hd text-4xl">All Product Datas</h1>
                </SectionHeading>
                <SectionBody>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(filters).map(key => (
                                <div className="relative w-full hover:bg-secondary flex items-center rounded-sm cursor-pointer select-none py-1.5 pl-8 pr-2 text-sm" key={key} value={key} onClick={() => handleFilterChange(key)}>
                                    {filters[key] && (
                                        <div className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                            <Check className="size-4" />
                                        </div>
                                    )}
                                    {tableHeaders[key]}
                                </div>
                            ))}
                        </SelectContent>
                    </Select>

                    <Table className="mt-base border rounded-md">
                        <TableHeader>
                            <TableRow>
                                {Object.keys(filters).map(key =>
                                    filters[key] && <TableHead key={key}>{tableHeaders[key]}</TableHead>
                                )}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((item, i) => (
                                <TableRow className={i % 2 === 0 ? "bg-neutral-100" : ""} key={item.id + "ProductsDataTable"}>
                                    {filters.category && (
                                        <TableCell className="font-medium">
                                            <Badge className={cn(
                                                "capitalize",
                                                item.category === "pill" ? "bg-green-100" :
                                                    item.category === "oil" ? "bg-yellow-100" :
                                                        item.category === "powder" ? "bg-orange-100" :
                                                            "bg-background"
                                            )} variant="outline">
                                                {item.category}
                                            </Badge>
                                        </TableCell>
                                    )}
                                    {filters.name && <TableCell>{item.name}</TableCell>}
                                    {filters.hindiName && <TableCell>{item.hindiName}</TableCell>}
                                    {filters.description && <TableCell>{item.description}</TableCell>}
                                    {filters.indication && <TableCell>{item.indication}</TableCell>}
                                    {filters.ingredients && <TableCell>{item.ingredients}</TableCell>}
                                    {filters.dose && <TableCell>{item.dose}</TableCell>}
                                    {filters.pricing && (
                                        <TableCell>
                                            {item.pricing.map((priceItem, j) => (
                                                <div className="text-nowrap" key={j + "ProductsDataQuantity"}>
                                                    {priceItem.quantity} - ₹{priceItem.price}
                                                </div>
                                            ))}
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </SectionBody>
            </Section>
        </main>
    );
}
