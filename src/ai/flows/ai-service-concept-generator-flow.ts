'use server';
/**
 * @fileOverview An AI agent that generates conceptual drafts or recommendations for CypherCore's AI-powered ad campaigns or video content services based on client business needs and goals.
 *
 * - aiServiceConceptGenerator - A function that handles the generation of AI service concepts.
 * - AiServiceConceptGeneratorInput - The input type for the aiServiceConceptGenerator function.
 * - AiServiceConceptGeneratorOutput - The return type for the aiServiceConceptGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiServiceConceptGeneratorInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe(
      "A detailed description of the client's current business needs and challenges."
    ),
  businessGoals: z
    .string()
    .describe(
      "A detailed description of the client's desired business goals and objectives."
    ),
  companyName: z.string().optional().describe("The name of the client's company (optional)."),
});
export type AiServiceConceptGeneratorInput = z.infer<
  typeof AiServiceConceptGeneratorInputSchema
>;

const AiServiceConceptGeneratorOutputSchema = z.object({
  conceptTitle: z.string().describe('A concise and engaging title for the conceptual draft.'),
  serviceType: z
    .enum(['AI-powered Ad Campaign', 'AI-powered Video Content'])
    .describe('The recommended service type based on the input.'),
  recommendation: z
    .string()
    .describe(
      "A detailed, high-level recommendation or conceptual draft for the chosen service type, explaining how CypherCore's AI capabilities can address the client's needs and achieve their goals."
    ),
  keyFeatures: z
    .array(z.string())
    .describe('A list of key features or components of the proposed solution.'),
  potentialImpact: z
    .string()
    .describe('A summary of the potential positive impact and benefits for the client.'),
});
export type AiServiceConceptGeneratorOutput = z.infer<
  typeof AiServiceConceptGeneratorOutputSchema
>;

export async function aiServiceConceptGenerator(
  input: AiServiceConceptGeneratorInput
): Promise<AiServiceConceptGeneratorOutput> {
  return aiServiceConceptGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiServiceConceptGeneratorPrompt',
  input: {schema: AiServiceConceptGeneratorInputSchema},
  output: {schema: AiServiceConceptGeneratorOutputSchema},
  prompt: `You are an expert AI service consultant for CypherCore Technologies Pvt. Ltd., a cutting-edge tech agency specializing in AI-powered ad campaigns and video content services.

Your task is to generate a high-level conceptual draft or recommendation for a potential client based on their business needs and goals. Focus on how CypherCore's AI capabilities can provide innovative solutions.

CypherCore Technologies Pvt. Ltd. Tagline: "Innovate. Elevate. Upgrade."

Client's Company Name: {{{companyName}}}
Client's Business Needs: {{{businessNeeds}}}
Client's Business Goals: {{{businessGoals}}}

Based on the client's input, provide a tailored concept that leverages either CypherCore's AI-powered ad campaigns or AI-powered video content services. The recommendation should be compelling and clearly outline the value proposition.
`,
});

const aiServiceConceptGeneratorFlow = ai.defineFlow(
  {
    name: 'aiServiceConceptGeneratorFlow',
    inputSchema: AiServiceConceptGeneratorInputSchema,
    outputSchema: AiServiceConceptGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate AI service concept.');
    }
    return output;
  }
);
