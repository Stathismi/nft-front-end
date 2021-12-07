export type TermsAndPolicyContent = {
  text: string;
  type?: 'heading' | 'subheading';
  content: string[]; // nested content
};
