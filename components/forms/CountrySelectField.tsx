'use client"'
import { useState } from "react"
import { Controller } from "react-hook-form"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Command, CommandList, CommandInput, CommandEmpty, CommandGroup, CommandItem } from "../ui/command"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import countryList from 'react-select-country-list'


const CountrySelect = ({value, onChange}: {value:string, onChange: (value:string) => void}) => {
    const [open, setOpen] = useState(false);

    const countries = countryList().getData();


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open ? "true" : "false"} className="country-select-trigger">
                    {value ? (
                        <span className="flex items-center gap-2">
                            <span
                                className={`fi fi-${value.toLowerCase()} w-5 h-4 rounded-sm`}
                                aria-hidden
                            />
                            <span>
                                {countries.find(c => c.value === value)?.label}
                            </span>
                        </span>
                        ) : (
                            'Select your country...'
                        )
                    }
                    <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 bg-gray-800 border-gray-600" align="start">
                <Command className="bg-gray-800 border-gray-600">
                    <CommandInput placeholder="Search country..." className="country-select-input" />
                    <CommandEmpty className="country-">No country found.</CommandEmpty>
                    <CommandList className="bg-gray-800 max-h-60 scrollbar-hide-default">
                        <CommandGroup className="bg-gray-800">
                            {countries.map((country) => (
                                <CommandItem
                                    key={country.value}
                                    value={country.label}
                                    onSelect={() => {
                                        onChange(country.value);
                                        setOpen(false);
                                    }}
                                    className="country-select-item"
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === country.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    <span
                                        className={`fi fi-${country.value.toLowerCase()} w-5 h-4 rounded-sm mr-2`}
                                        aria-hidden
                                        />
                                    <span>{country.label}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


const CountrySelectField = ({name, label, control, error, required=false}:CountrySelectProps) => {
  return (
    <div className="space-y-2">
        <Label htmlFor={name} className="form-label">
            {label}
        </Label>
        
        <Controller
            name={name}
            control={control}
            rules={{required: required ? `Please Select ${label.toLowerCase()}` : false }}
            render={({field}) => (
                <CountrySelect value={field.value} onChange={field.onChange} />
            )}
        />

        {error && <p className="text-sm text-red-500">{error.message}</p>}
        <p className="text-xs text-gray-500">
            Help us show market data and news relevant to you.
        </p>
    </div>
  )
}

export default CountrySelectField