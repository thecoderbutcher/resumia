import { z } from "zod";

export const personalInformationSchema = z.object({
  fullname: z.string().min(4, "name error").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  role: z.string().optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  phone: z.string().min(11, "Ingresar un telefono valido").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  email: z.email("Email invalido").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  web: z.string().optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  github: z.string().optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  linkedin: z.string().optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
});

export const experienceSchema = z.object({
  position: z.string().min(3, "campo obligatorio").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  company: z.string().min(3, "campo obligatorio").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  startdate: z.string().min(3, "EL campo no puede ser vacio").optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  enddate: z.string().optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  workDescription: z.string().optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
});

export const educationSchema = z.object({
  degree: z.string().min(4, "compo obligatorio").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  institution: z.string().min(4, "campo obligatorio").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  state: z.string().min(4, "compo obligatorio").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  hours: z.coerce.number().optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  educationDescription: z.string().optional().refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
});

export const extraSchema = z.object({
  language: z.string().min(3, "campo obligatorio").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
  level: z.string().min(3, "campo obligatorio").refine(
    (val) => !/<script|on\w+=|javascript:/i.test(val),
    "contentError"
  ),
});
