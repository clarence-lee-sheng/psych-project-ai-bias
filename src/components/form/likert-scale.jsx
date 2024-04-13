import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function LikertScale({form, fieldName, question, firstLabel, lastLabel, values}) {
    console.log("Form", form)
    console.log("fieldName", fieldName)
    console.log("question", question)
    console.log("firstLabel", firstLabel)
    console.log("lastLabel", lastLabel)
    console.log("values", values)

    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel className="text-base font-bold">{question}</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row space-y-1 space-x-4"
                        >
                            <div className='w-32 text-right'>{firstLabel}</div>
                            {values.map((value, i) => (
                                <FormItem key={i} className="flex flex-col justify-center items-center space-y-2">
                                    <FormControl>
                                        <RadioGroupItem value={value} />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {value}
                                    </FormLabel>
                                </FormItem>
                            ))}
                            <div className='w-72 text-left'>{lastLabel}</div>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

