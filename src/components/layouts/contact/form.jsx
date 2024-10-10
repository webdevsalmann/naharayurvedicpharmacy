"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

// const FormSchema = z.object({
//     fullname: z.string(),
//     email: z.string().email(),
//     isHiring: z.boolean(),
//     socialPresence: z.string().optional(),
//     businessDescription: z.string().optional(),
//     interestedService: z.string(),
//     projectBudget: z.string(),
//     problemToSolve: z.string().optional(),
//     successDefinition: z.string().optional(),
//     message: z.string().optional(),
// });

export default function FormBox() {
    const [btnDisable, setBtnDisable] = useState(false);

    // REACT HOOK FORM
    const form = useForm({
        // resolver: zodResolver(FormSchema),
        defaultValues: {
            fullname: "",
            email: "",
            message: "",
        },
    });
    const { handleSubmit, formState: { isSubmitting } } = form;

    return (
        <Form {...form}>
            <form
                className="mx-auto w-full space-y-6 rounded-md"
                // onSubmit={handleSubmit(onSubmit)}
            >

                {/* Full Name */}
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="fullname">Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    {...field}
                                    required />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl>
                                <Input
                                    id="email"
                                    name="email"
                                    type="text"
                                    {...field}
                                    required />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Message */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    id="message"
                                    name="message"
                                    type="text"
                                    {...field}
                                    placeholder="Type your message here..."
                                    required />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <div className="flex-center">
                    <Button className="w-fit" disabled={isSubmitting || btnDisable}>
                        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />} Send{isSubmitting && "ing"}
                        {!isSubmitting && <Send className="ml-2 size-3 inline" />}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
