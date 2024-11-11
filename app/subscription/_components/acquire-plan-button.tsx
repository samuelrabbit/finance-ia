"use client";

import { Button } from "@/app/_components/ui/button";
import { loadStripe } from "@stripe/stripe-js";

interface AcquirePlanButtonProps {
  sessionId: string;
}

const AcquirePlanButton = ({ sessionId }: AcquirePlanButtonProps) => {
  const handleAcquirePlanClick = async () => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key not found");
    }

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );

    if (!stripe) {
      throw new Error("Stripe not initialized");
    }

    await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <Button
      className="w-full rounded-full font-bold"
      onClick={handleAcquirePlanClick}
    >
      Adquirir Plano
    </Button>
  );
};

export default AcquirePlanButton;
