// components/PersonalInfoForm.tsx
import React from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import TextField from "@/components/common/base/TextField";
import TextArea from "@/components/common/base/TextArea";
import Dropdown from "@/components/common/base/Dropdown";
import DropdownCountryCode from "@/components/common/base/DropdownCountryCode";
import { CountryWithCode, Pronouns } from "@/constants";

export interface PersonalInfoValues extends FieldValues {
  firstName: string;
  lastName: string;
  pronoun: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  about: string;
  countryOrRegion: string;
  city: string;
  postalCode: string;
  address: string;
}

interface PersonalInfoFormProps extends UseFormReturn<PersonalInfoValues> {
  isOpen: boolean;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  register,
  setValue,
  formState: { errors },
  isOpen,
}) => {
  const getOptionLabel = (option: any): string => option.label;
  const getOptionCountry = (option: any): string => option.name;

  return (
    <div className={`${isOpen ? "grid" : "hidden"} w-full`}>
      <div className="flex pt-6 pb-3">
        <TextField
          placeholder="First Name"
          label="First name"
          register={register("firstName", {
            required: "First Name is required",
          })}
          error={!!errors.firstName}
          errorMsg={errors.firstName?.message}
        />
        <TextField
          placeholder="Last Name"
          className="mx-2"
          label="Last name"
          register={register("lastName", {
            required: "Last Name is required",
          })}
          error={!!errors.lastName}
          errorMsg={errors.lastName?.message}
        />
        <Dropdown
          options={Pronouns}
          getOptionLabel={getOptionLabel}
          label="Pronoun"
          placeholder="Select Pronoun"
          register={register("pronoun")}
          setValue={setValue}
          name="pronoun"
        />
      </div>
      <div className="flex justify-start py-3">
        <DropdownCountryCode
          width="w-1/5"
          options={CountryWithCode}
          getOptionCountry={getOptionCountry}
          label="Code"
          placeholder="Code"
          register={register("countryCode")}
          setValue={setValue}
          name="countryCode"
          code
        />
        <TextField
          width="w-2/5"
          placeholder="Phone number"
          label="Phone number"
          register={register("phoneNumber", {
            required: "Phone number is required",
          })}
          error={!!errors.phoneNumber}
          errorMsg={errors.phoneNumber?.message}
          className="mx-2"
        />
        <TextField
          width="w-2/5"
          placeholder="Email"
          label="Email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          error={!!errors.email}
          errorMsg={errors.email?.message}
        />
      </div>
      <div className="flex py-3">
        <TextArea
          label="About"
          placeholder="Brief introduction"
          register={register("about")}
        />
      </div>
      <div className="flex py-3">
        <TextField
          placeholder="Country/Region"
          label="Country/Region"
          register={register("countryOrRegion", {
            required: "Country/Region is required",
          })}
          error={!!errors.countryOrRegion}
          errorMsg={errors.countryOrRegion?.message}
        />
        <TextField
          placeholder="City"
          label="City"
          className="mx-2"
          register={register("city", {
            required: "City is required",
          })}
          error={!!errors.city}
          errorMsg={errors.city?.message}
        />
        <TextField
          placeholder="Postal Code"
          label="Postal code"
          register={register("postalCode", {
            required: "Postal Code is required",
            maxLength: 10,
          })}
          error={!!errors.postalCode}
          errorMsg={errors.postalCode?.message}
        />
      </div>
      <div className="flex py-3">
        <TextField
          placeholder="Address"
          label="Address"
          register={register("address")}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
