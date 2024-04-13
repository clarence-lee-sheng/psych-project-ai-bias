"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import LikertScale from "@/components/form/likert-scale.jsx"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export default function IatForm({onSubmit}) {
    const form = useForm()


    console.log("Form", form)

    return (
        <div className="pt-16">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="commitmentCheck"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base font-bold">I commit to answering this survey truthfully and to the best of my ability (type I commit)</FormLabel>
                                <FormControl>
                                    <Input placeholder="I commit" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base font-bold">What is your email (optional: only if you want your results emailed to you (within 1-2 weeks))</FormLabel>
                                <FormControl>
                                    <Input placeholder="Type email here" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
 
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-base font-bold">What is your age?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-row items-center space-x-4"
                                    >
                                        <FormItem className="flex items-center space-x-4 space-y-0">
                                            <FormControl className="">
                                                <RadioGroupItem value="18-24" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                18-24
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-4 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="25-34" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                25-34
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-4 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="35-44" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                35-44
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-4 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="45-54" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                               45-54
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-4 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="55-64" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                               55-64
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-4 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="65+" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                               65+
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                                       <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-base font-bold">What is your gender?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-row items-center space-x-4"
                                    >
                                        <FormItem className="flex items-center space-x-4 space-y-0">
                                            <FormControl className="">
                                                <RadioGroupItem value="male" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Male
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-4 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="female" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Female
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <LikertScale form={form} fieldName={"proficiency"} question="How proficient are you with using generative AI tools" firstLabel="Not Proficient" lastLabel="Very Proficient" values={["1", "2", "3", "4", "5", "6", "7"]}/>
                    <LikertScale form={form} fieldName={"trust"} question="I trust AI" firstLabel="No Trust" lastLabel="Full Trust" values={["1", "2", "3", "4", "5", "6", "7"]}/>
                    <LikertScale form={form} fieldName={"danger"} question="I believe that AI is dangerous to humankind" firstLabel="Not dangerous" lastLabel="Very dangerous" values={["1", "2", "3", "4", "5", "6", "7"]}/>
                    <LikertScale form={form} fieldName={"frequency"} question="I use AI frequently" firstLabel="Not Frequently" lastLabel="Very Frequently" values={["1", "2", "3", "4", "5", "6", "7"]}/>
                    <Button type="submit">Next</Button>
                </form>
            </Form>
        </div>
    )
}

