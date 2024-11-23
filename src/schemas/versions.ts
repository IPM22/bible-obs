import { z } from "zod";

const LanguageSchema = z.object({
  id: z.string(),
  name: z.string(),
  nameLocal: z.string(),
  script: z.string(),
  scriptDirection: z.string(),
});

const CountrySchema = z.object({
  id: z.string(),
  name: z.string(),
  nameLocal: z.string(),
});

const AudioBibleSchema = z.object({
  id: z.string(),
  name: z.string(),
  nameLocal: z.string(),
  description: z.string(),
  descriptionLocal: z.string(),
});

export const VersionSchema = z.object({
  id: z.string(),
  dblId: z.string(),
  abbreviation: z.string(),
  abbreviationLocal: z.string(),
  language: LanguageSchema,
  countries: z.array(CountrySchema),
  name: z.string(),
  nameLocal: z.string(),
  description: z.string(),
  descriptionLocal: z.string(),
  relatedDbl: z.string(),
  type: z.string(),
  updatedAt: z.string(),
  audioBibles: z.array(AudioBibleSchema),
});

export const VersionsResponseSchema = z.object({
  data: z.array(VersionSchema),
});

export type VersionsResponse = z.infer<typeof VersionsResponseSchema>;
