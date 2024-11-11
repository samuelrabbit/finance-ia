import AddTransactionButton from "@/app/_components/add-transactions-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  amount: number;
  size?: "default" | "other";
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "default",
}: SummaryCardProps) => {
  return (
    <Card className={`${size === "other" ? "bg-white bg-opacity-5" : ""}`}>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "default" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`${size === "default" ? "text-2xl font-bold" : "text-4xl font-bold"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "other" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
