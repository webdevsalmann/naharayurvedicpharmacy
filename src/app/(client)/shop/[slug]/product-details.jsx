
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import Section from "@/components/section/section"
import { Cross, GlassWater, Hash, Phone, Sprout } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

export default function ProductDetails({
    data: { category, name, hindiName, description, benefits, ingredients, indication, dose, pricing }
}) {

    return (
        <Section className="">
            <div className="relative grid gap-base md:gap-block md:grid-cols-5">
                {/* Image */}
                <div className="md:sticky top-base h-fit md:col-span-2">
                    <Image
                        className='w-full h-fit aspect-[4/4.5] object-cover border rounded'
                        src="/images/product/1.jpg"
                        width={300}
                        height={300}
                        alt='Product Image'
                    />
                </div>

                {/* Details */}
                <div className="md:col-span-3">
                    <Badge className="uppercase text-sm" variant="secondary">{category}</Badge>
                    <h1 className="mt-base h2 mb-0 font-bold font-stix">{name}</h1>
                    <p className="mt-xs h3 font-bold font-stix">{hindiName}</p>
                    <p className="mt-2 text-foreground">{benefits}</p>
                    <p className="mt-base text-sm">{description}</p>

                    {/* More Details */}
                    <div className="mt-base">
                        {/* Indication */}
                        <div className="py-base border-t">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Cross className="size-base shrink-0" />
                                <span>Indication</span>
                            </div>
                            <div className="mt-1">{indication}</div>
                        </div>

                        {/* Ingredients */}
                        <div className="py-base border-t">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Sprout className="size-base shrink-0" />
                                <span>Ingredients</span>
                            </div>
                            <div className="mt-1">{ingredients}</div>
                        </div>

                        {/* Usage */}
                        <div className="py-base border-t">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <GlassWater className="size-base shrink-0" />
                                <span>Dose</span>
                            </div>
                            <div className="mt-1">{dose}</div>
                        </div>

                        {/* {Pricing} */}
                        <div className="py-base px-px border-t">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Hash className="inline size-4 shrink-0" />
                                <span>Pricing</span>
                            </div>
                            <Table className="mt-2 border rounded-md overflow-hidden">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead className="text-right">Price (INR-₹)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {pricing.map((item) => (
                                        <TableRow key={name + item.price + "ProductDetail"}>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell className="text-right">₹{item.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-base flex gap-4">
                        <Link className={buttonVariants()} href="#">
                            <Phone className="mr-2 size-4 inline" />Call to place order
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}
