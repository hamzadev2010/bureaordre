"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMultiplestepForm } from "hooks/useMultiplestepForm";
import { AnimatePresence } from "framer-motion";
import UserInfoForm from "@/components/UserInfoForm";
import PlanForm from "@/components/PlanForm";
import AddonsForm from "@/components/AddonsForm";
import FinalStep from "@/components/FinalStep";
import SuccessMessage from "@/components/SuccessMessage";
import SideBar from "@/components/SideBar";

interface AddOn {
  id: number;
  checked: boolean;
  title: string;
  subtitle: string;
}

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "Type 1 (شكاية)" | "Type 2" | "Type 3";
  yearly: boolean;
  addOns: AddOn[];
  pdfFile: File | null;
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Type 1 (شكاية)",
  yearly: false,
  addOns: [
    {
      id: 1,
      checked: true,
      title: "Division X",
      subtitle: "Service X",
    },
    {
      id: 2,
      checked: false,
      title: "Division X",
      subtitle: "Service X",
    },
    {
      id: 3,
      checked: false,
      title: "Division X",
      subtitle: "Service X",
    },
  ],
  pdfFile: null,
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(4);

  function updateForm(fieldToUpdate: Partial<FormItems>) {
    const { name, email, phone } = fieldToUpdate;

    if (name && name.trim().length < 1) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Veuillez saisir le nom",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Veuillez saisir le Prenom",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (phone && !/^[0-9]{10}$/.test(phone)) {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Veuillez saisir le numero de telephone ",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phone: "",
      }));
    }

    setFormData({ ...formData, ...fieldToUpdate });
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    nextStep();
  };

  return (
    <div
      className={`flex justify-between ${
        currentStepIndex === 1 ? "h-[600px] md:h-[500px]" : "h-[500px]"
      } w-11/12 max-w-4xl relative m-1 rounded-lg border border-neutral-700 bg-[#686D76] p-4`}
    >
      {!showSuccessMsg ? (
        <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
      ) : (
        ""
      )}
      <main
        className={`${showSuccessMsg ? "w-full" : "w-full md:mt-5 md:w-[65%]"}`}
      >
        {showSuccessMsg ? (
          <AnimatePresence mode="wait">
            <SuccessMessage />
          </AnimatePresence>
        ) : (
          <form
            onSubmit={handleOnSubmit}
            className="w-full flex flex-col justify-between h-full"
          >
            <AnimatePresence mode="wait">
              {currentStepIndex === 0 && (
                <UserInfoForm
                  key="step1"
                  {...formData}
                  updateForm={updateForm}
                  errors={errors}
                />
              )}
              {currentStepIndex === 1 && (
                <PlanForm key="step2" {...formData} updateForm={updateForm} />
              )}
              {currentStepIndex === 2 && (
                <AddonsForm key="step3" {...formData} updateForm={updateForm} />
              )}
              {currentStepIndex === 3 && (
                <FinalStep key="step4" {...formData} goTo={goTo} />
              )}
            </AnimatePresence>
            <div className="w-full items-center flex justify-between">
              <div className="">
              <Button
  onClick={previousStep}
  type="button"
  variant="ghost"
  className={`relative text-neutral-200 bg-neutral-900 border border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white ${isFirstStep ? "invisible" : "visible"}`}
>
  Précédent
</Button>

              </div>
              <div className="flex items-center">
                <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
                  <Button
                    type="submit"
                    className="relative text-neutral-200 bg-neutral-900 border border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white"
                  >
                    {isLastStep ? "Confirmer" : "Suivant"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
