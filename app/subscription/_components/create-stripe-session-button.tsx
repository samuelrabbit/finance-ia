import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import AcquirePlanButton from "./acquire-plan-button";

const CreateStripeSessionButton = async () => {
  const { sessionId } = await createStripeCheckout();

  return <AcquirePlanButton sessionId={sessionId} />;
};

export default CreateStripeSessionButton;
