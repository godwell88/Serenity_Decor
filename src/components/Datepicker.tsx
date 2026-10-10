import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatepickerProps = {
  date?: Date
  onDateChange: (date: Date | undefined) => void
}

export function Datepicker({ date, onDateChange }: DatepickerProps) {

  return (
    <Popover>
      <PopoverTrigger
          data-empty={!date}
          className="booking-date-trigger w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
        >
        {date ? format(date, "PPP") : <span>Pick a date</span>}
        <ChevronDownIcon className="h-4 w-4" />
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
  );
}

export default Datepicker;