"use client";

import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import { Separator } from "@/components/ui/separator";
import { FormItems } from "@/app/page";

type StepProps = FormItems & {
  goTo: (index: number) => void;
};

const FinalStep = ({ yearly, plan, addOns, goTo }: StepProps) => {
  let planPrice = 0;
  switch (plan) {
    case "Type 1 (شكاية)":
      planPrice = 9;
      break;
    case "Type 2":
      planPrice = 12;
      break;
    case "Type 3":
      planPrice = 15;
      break;
    default:
      planPrice = 0;
      break;
  }

  const filteredAddOns = addOns.filter((addOn) => addOn.checked === true);


  
  return (
    <FormWrapper
      title="Confirmations"
      description="Veuillez confirmer votre choix pour l'envoi du courrier."
    >
      <div className="">
        <div className="bg-neutral-900 p-4 mt-2 rounded-md border border-neutral-700">
          <div className="flex justify-between items-center">
            <div className="">
              <h4 className="font-semibold text-white md:text-lg">
                {`${plan.charAt(0).toUpperCase() + plan.slice(1)} (${
                  yearly ? "Urgent" : "Normale"
                })`}
              </h4>
              <button
                onClick={() => goTo(1)}
                className="text-[#6fe79f] text-sm"
              >
                
              </button>
            </div>
            
          </div>
          {filteredAddOns.length > 0 && <Separator className="my-4" />}
          {filteredAddOns?.map((addOn) => (
            <div
              className="flex justify-between items-center my-2"
              key={addOn.id}
            >
              <p className="text-neutral-400">{addOn.title}</p>
            
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center my-4 px-4">
          
          <p className="text-[#6fe79f] font-semibold md:text-lg">
            
            
          </p>
        </div>
      </div>
    </FormWrapper>
  );
};

export default FinalStep;
