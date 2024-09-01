import FormWrapper from "./FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItems } from "../app/page";

type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  errors: {
    name?: string;
    email?: string;
    phone?: string;
    pdfFile?: string; // Explicitly include pdfFile errors
  };
};

const UserInfoForm = ({
  name,
  email,
  phone,
  pdfFile,
  errors,
  updateForm,
}: StepProps) => {
  return (
    <FormWrapper
      title="Informations du courrier"
      description="Veuillez remplir les champs suivants : Nom, Prénom, et Numéro de téléphone."
    >
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nom</Label>
          <Input
            autoFocus
            type="text"
            name="name"
            id="name"
            placeholder="hamza"
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className="w-full"
            style={{ color: "black" }} // Set text color to black
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="prenom">Prenom</Label>
          <Input
            type="text"
            name="prenom"
            id="prenom"
            placeholder="hamza"
            value={email}
            className="w-full"
            style={{ color: "black" }} // Set text color to black
            onChange={(e) => updateForm({ email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Numero de telephone</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+2125"
            value={phone}
            className="w-full"
            onChange={(e) => updateForm({ phone: e.target.value })}
            required
            style={{ color: "black" }} // Set text color to black
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="pdfFile">Upload PDF</Label>
          <Input
            type="file"
            name="pdfFile"
            id="pdfFile"
            accept=".pdf"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              updateForm({ pdfFile: file });
            }}
            className="w-full"
          />
          {errors.pdfFile && (
            <p className="text-red-500 text-sm">{errors.pdfFile}</p>
          )}
        </div>
      </div>
    </FormWrapper>
  );
};

export default UserInfoForm;
