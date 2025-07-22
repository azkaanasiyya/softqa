export type Plan = {
  name: string;
  price: string;
  color: string;
  textColor: string;
  valueColor: string;
  button: {
    label: string;
    variant: string;
    textColor: string;
  };
  features: string[];
};

export const FEATURES: string[] = [
  "Users",
  "Test Script",
  "Browser Support",
  "Test Execution",
  "Reporting & Analytics",
  "Integrations",
  "Security Features",
  "Support",
  "Customization",
  "AI Features",
  "Training & Onboarding",
];

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$29",
    color: "base-white",
    textColor: "grayscale-500",
    valueColor: "grayscale-900",
    button: {
      label: "Get Started",
      variant: "login",
      textColor: "text-primary-500",
    },
    features: [
      "check", "sign", "Chrome", "check", "check",
      "sign", "check", "Chat (24/7)", "check", "sign", "check"
    ],
  },
  {
    name: "Team",
    price: "$99",
    color: "primary-900",
    textColor: "#FFFFFFEB",
    valueColor: "base-white",
    button: {
      label: "Get Started",
      variant: "request",
      textColor: "text-cyan-500",
    },
    features: [
      "check", "check", "Chrome, Firefox, Safari", "check", "check",
      "check", "check", "Priority support", "check", "sign", "check"
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    color: "base-white",
    textColor: "grayscale-500",
    valueColor: "grayscale-900",
    button: {
      label: "Get Started",
      variant: "login",
      textColor: "text-primary-500",
    },
    features: [
      "check", "check", "All browsers + mobile testing", "check", "check",
      "check", "check", "Dedicated account manager", "check", "check", "check"
    ],
  },
];

