import { useFormStore } from "../../../../store/useFormStore";
import { useLangStore } from "../../../../store/useLangStore";
import { education } from "../../../../constants/language";
import { educationSchema } from "../../../../schemas/formSchema";
import { buttons } from "../../../../constants/language";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FaRegRectangleList,
  FaBuildingColumns,
  FaHourglassHalf,
  FaAlignJustify,
  FaClockRotateLeft,
} from "react-icons/fa6";
import InputForm from "./InputForm";
import toast, { Toaster } from "react-hot-toast";
import ToastMsg from "./ToastMsg";

const EducationForm = () => {
  const { lang } = useLangStore();
  const { nextStep, prevStep, data, updateData } = useFormStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(educationSchema),
    defaultValues: data,
  });

  const onSubmit = (values) => {
    const newEducation = { ...values };
    const newData = { ...data, education: [...data.education, newEducation] };

    toast(education[lang].toast);

    updateData(newData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl">{education[lang].title}</h2>
        <ToastMsg />
        <InputForm
          error={errors.degree}
          errormessage={(errors.degree?.message !== "contentError" ? education[lang].errorCertification : education[lang].contentError)}
          Icon={FaRegRectangleList}
        >
          <input
            {...register("degree")}
            className="w-full outline-none"
            type="text"
            placeholder={education[lang].certification}
          />
        </InputForm>
        <InputForm
          error={errors.institution}
          errormessage={(errors.institution?.message !== "contentError" ? education[lang].errorInstitution : education[lang].contentError)}
          Icon={FaBuildingColumns}
        >
          <input
            {...register("institution")}
            className="w-full outline-none"
            type="text"
            placeholder={education[lang].institution}
          />
        </InputForm>
        <InputForm
          error={errors.state}
          errormessage={(errors.state?.message !== "contentError" ? education[lang].errorState : education[lang].contentError)}
          Icon={FaHourglassHalf}
        >
          <input
            {...register("state")}
            className="w-full outline-none"
            type="text"
            placeholder={education[lang].state}
          />
        </InputForm>
        <InputForm
          error={errors.hours}
          errormessage={(errors.hours?.message !== "contentError" ? education[lang].errorHours : education[lang].contentError)}
          Icon={FaClockRotateLeft}
        >
          <input
            {...register("hours")}
            className="w-full outline-none"
            type="number"
            placeholder={education[lang].duration}
          />
        </InputForm>
        <InputForm
          error={errors.description}
          errormessage={(errors.description?.message !== "contentError" ? education[lang].errorDescription : education[lang].contentError)}
          Icon={FaAlignJustify}
        >
          <textarea
            name=""
            id=""
            rows={1}
            className="w-full outline-none resize-none"
            placeholder={education[lang].description}
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

export default EducationForm;
