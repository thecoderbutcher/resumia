import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "../../../../store/useFormStore";
import { useLangStore } from "../../../../store/useLangStore";
import { experience } from "../../../../constants/language";
import { buttons } from "../../../../constants/language";
import { experienceSchema } from "../../../../schemas/formSchema";
import {
  FaBriefcase,
  FaBuilding,
  FaAlignJustify,
  FaCalendarDay,
} from "react-icons/fa6";
import InputDate from "./InputDate";
import InputForm from "./InputForm";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ToastMsg from "./ToastMsg";

const ExperienceForm = () => {
  const { nextStep, prevStep, updateData, data } = useFormStore();
  const { lang } = useLangStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(experienceSchema),
    defaultValues: data,
  });

  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");

  const onSubmit = (values) => {
    const newExperience = {
      ...values,
      startdate: startDateValue,
      enddate: endDateValue,
    };

    const newData = {
      ...data,
      experience: [...data.experience, newExperience],
    };
    updateData(newData);

    toast(experience[lang].toast);
    reset();
  };

  const saveStartDate = (value) => {
    setStartDateValue(value);
  };
  const saveEndDate = (value) => {
    setEndDateValue(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl">{experience[lang].title}</h2>
        <ToastMsg />
        <InputForm
          error={errors.company}
          errormessage={(errors.company?.message !== "contentError" ? experience[lang].errorCompany : experience[lang].contentError)}
          Icon={FaBuilding}
        >
          <input
            {...register("company")}
            type="text"
            className="w-full outline-none"
            placeholder={experience[lang].company}
          />
        </InputForm>
        <InputForm
          error={errors.position}
          errormessage={(errors.position?.message !== "contentError" ? experience[lang].errorPosition : experience[lang].contentError)}
          Icon={FaBriefcase}
        >
          <input
            {...register("position")}
            type="text"
            className="w-full outline-none"
            placeholder={experience[lang].position}
          />
        </InputForm>
        <InputForm
          error={errors.startdate && !startDateValue ? errors.startdate : ""}
          errormessage={(errors.startdate?.message !== "contentError" ? experience[lang].errorStartDate : experience[lang].contentError)}
          Icon={FaCalendarDay}
        >
          <InputDate
            name="startdate"
            register={register}
            placeholder={experience[lang].startDate}
            onChange={saveStartDate}
          />
        </InputForm>
        <InputForm
          error={endDateValue && startDateValue >= endDateValue}
          errormessage={(errors.enddate?.message !== "contentError" ? experience[lang].errorDate : experience[lang].contentError)}
          Icon={FaCalendarDay}
        >
          <InputDate
            name="enddate"
            register={register}
            placeholder={experience[lang].endDate}
            onChange={saveEndDate}
          />
        </InputForm>
        <InputForm
          error={errors.workDescription}
          errormessage={(errors.workDescription?.message === "contentError" ? experience[lang].contentError : experience[lang].errorWorkDescription)}
          Icon={FaAlignJustify}
        >
          <textarea
            name=""
            id=""
            rows={1}
            className="w-full outline-none resize-none"
            placeholder={experience[lang].description}
          ></textarea>
        </InputForm>
        <button
          type="submit"
          className="bg-blue-600/50 hover:bg-blue-600 rounded-md py-1"
        >
          {buttons[lang].add}
        </button>
      </div>
      <div className="flex justify-between pt-8">
        <button
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
          type="button"
          onClick={() => prevStep()}
        >
          {buttons[lang].prev}
        </button>
        <button
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
          type="button"
          onClick={() => nextStep()}
        >
          {buttons[lang].next}
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
