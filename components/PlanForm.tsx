"use client";

import { useState } from "react";
import Image from "next/image";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import FormWrapper from "./FormWrapper";
import { FormItems } from "@/app/page";


type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

type Plan = "Type 1 ( شكاية)" | "Type 2" | "Type 3";

const PlanForm = ({ updateForm, plan, yearly }: stepProps) => {
  const [yearlyUpdated, setYearlyUpdated] = useState(yearly);
  const [planSelected, setPlanSelected] = useState<Plan>(plan);

  const handleCheckedChange = (yearlyUpdated: boolean) => {
    setYearlyUpdated((prev) => !prev);
    updateForm({ yearly: yearlyUpdated });
  };

  const handleValueChange = (planSelected: Plan) => {
    if (planSelected) {
      setPlanSelected(planSelected);
      updateForm({ plan: planSelected });
    }
  };

  return (
    <FormWrapper
      title="Sélectionnez le type de courrier"
      description="indiquez s'il est en état urgent ou normal"
    >
      <ToggleGroup.Root
        orientation="horizontal"
        className="flex flex-col gap-3 my-2 md:flex-row md:items-center md:justify-between md:gap-0"
        type="single"
        value={planSelected}
        onValueChange={handleValueChange}
      >
        <ToggleGroup.Item
          value="Type 1 ( شكاية)"
          className="border border-neutral-600 flex items-start gap-3 p-3 h-24 rounded-md aspect-square data-[state=on]:border-[#77f6aa] data-[state=on]:bg-neutral-900 focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
      
          <div className="relative -top-1 flex flex-col items-start md:top-0">
            <p className="text-white font-semibold">Type 1 ( شكاية)</p>
            <p className="text-sm">{yearly ? "Urgent" : "Normale"}</p>
           
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="Type 2"
          className="border border-neutral-600 flex items-start gap-3 p-3 h-24 rounded-md aspect-square data-[state=on]:border-[#77f6aa] data-[state=on]:bg-neutral-900 focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >

          <div className="relative -top-1 flex flex-col items-start md:top-0">
            <p className="text-white font-semibold">Type 2</p>
            <p className="text-sm">{yearly ? "Urgent" : "Normale"}</p>
            {yearly && (
              <span className="text-white text-sm"></span>
            )}
          </div>
        </ToggleGroup.Item>

        <ToggleGroup.Item
          className="border border-neutral-600 flex items-start gap-3 p-3 h-24 rounded-md aspect-square data-[state=on]:border-[#77f6aa] data-[state=on]:bg-neutral-900 focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
          value="Type 3"
        >
          
          <div className="relative -top-1 flex flex-col items-start md:top-0">
            <p className="text-white font-semibold">Type 3</p>
            <p className="text-sm">{yearly ? "Urgent" : "Normale"}</p>
            {yearly && (
              <span className="text-white text-sm"></span>
            )}
          </div>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <div className="w-full flex items-center justify-center bg-neutral-900 p-3 rounded-md">
        <div className="flex items-center gap-6">
          <Label
            htmlFor="airplane-mode"
          
          >
            Normale
          </Label>
          <Switch
            id="airplane-mode"
            checked={yearlyUpdated}
            onCheckedChange={handleCheckedChange}
          />
          <Label
            htmlFor="airplane-mode"
            
          >
            Urgent
          </Label>
        </div>
      </div>
    </FormWrapper>
  );
};

export default PlanForm;
