import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "../../../../store/useFormStore";
import { useLangStore } from "../../../../store/useLangStore";
import { personalInformation } from "../../../../constants/language";
import { personalInformationSchema } from "../../../../schemas/formSchema";
import { buttons } from "../../../../constants/language";
import InputForm from "./InputForm";
import {
  FaUser,
  FaIdCardClip,
  FaPhone,
  FaEnvelope,
  FaGithubAlt,
  FaLinkedin,
  FaEarthAmericas,
} from "react-icons/fa6";

const PersonalForm = () => {
  const { lang } = useLangStore();
  const { data, updateData, nextStep } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: data,
  });

  const onSubmit = (values) => {
    updateData(values);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl">{personalInformation[lang].title}</h2>
        <InputForm
          error={errors.fullname }
          errormessage={(errors.fullname?.message !== "contentError" ? personalInformation[lang].fullnameError : personalInformation[lang].contentError)}
          Icon={FaUser}
        >
          <input
            {...register("fullname")}
            type="text"
            className="w-full outline-none"
            placeholder={personalInformation[lang].fullnamePlaceholder}
            autoComplete="false"
          />
        </InputForm>

        <InputForm
          error={errors.phone}
          errormessage={(errors.phone?.message !== "contentError" ? personalInformation[lang].phoneError : personalInformation[lang].contentError)}
          Icon={FaPhone}
        >
          <input
            {...register("phone")}
            type="text"
            className="w-full outline-none"
            placeholder={personalInformation[lang].phone}
          />
        </InputForm>

        <InputForm
          error={errors.email}
          errormessage={(errors.email?.message !== "contentError" ? personalInformation[lang].emailError : personalInformation[lang].contentError)}
          Icon={FaEnvelope}
        >
          <input
            {...register("email")}
            type="text"
            className="w-full outline-none"
            placeholder={personalInformation[lang].email}
          />
        </InputForm>

        <InputForm
          error={errors.role}
          errormessage={(errors.role?.message !== "contentError" ? personalInformation[lang].roleError : personalInformation[lang].contentError)}
          Icon={FaIdCardClip}
        >
          <input
            {...register("role")}
            type="text"
            className="w-full outline-none"
            placeholder={personalInformation[lang].role}
          />
        </InputForm>

        <InputForm
          error={errors.web}
          errormessage={(errors.web?.message !== "contentError" ? personalInformation[lang].webError : personalInformation[lang].contentError)}
          Icon={FaEarthAmericas}
        >
          <input
            {...register("web")}
            type="text"
            className="w-full outline-none"
            placeholder={personalInformation[lang].web}
          />
        </InputForm>

        <InputForm
          error={errors.github}
          errormessage={(errors.github?.message !== "contentError" ? personalInformation[lang].githubError : personalInformation[lang].contentError)}
          Icon={FaGithubAlt}
        >
          <input
            {...register("github")}
            type="text"
            className="w-full outline-none"
            placeholder={personalInformation[lang].github}
          />
        </InputForm>

        <InputForm    
          error={errors.linkedin}
          errormessage={(errors.linkedin?.message !== "contentError" ? personalInformation[lang].linkedinError : personalInformation[lang].contentError)}
          Icon={FaLinkedin}
        >
          <input
            {...register("linkedin")}
            type="text"
            className="w-full outline-none"
            placeholder={personalInformation[lang].linkedin}
          />
        </InputForm>
      </div>
      <div className="flex justify-end pt-8">
        <button
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
          type="submit"
        >
          {buttons[lang].next}
        </button>
      </div>
    </form>
  );
};

export default PersonalForm;
