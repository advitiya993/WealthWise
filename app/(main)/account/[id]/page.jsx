import { Suspense } from "react";
import { getAccountWithTransactions } from "@/actions/account";
import { BarLoader } from "react-spinners";
import { notFound } from "next/navigation";
import { AccountChart } from "../_components/account-chart";

export default async function AccountPage({ params }) {
  const account = await getAccountWithTransactions(params.id);

  if (!account) notFound();

  // Normalize only for the chart (keep page display raw/simple)
  const transactions = (account.transactions || []).map((t) => ({
    ...t,
    amount:
      t.amount && typeof t.amount.toNumber === "function"
        ? t.amount.toNumber()
        : Number(t.amount),
  }));

  
  return (
    <div className="space-y-6 px-5">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight capitalize">{account.name}</h1>
          <p className="text-muted-foreground">
            {account.type && account.type.toString().charAt(0) + account.type.toString().slice(1).toLowerCase()} Account
          </p>
        </div>

        <div className="text-right pb-2">
          <div className="text-xl font-bold">{account.balance}</div>
          <p className="text-sm text-muted-foreground">{account._count?.transactions ?? 0} Transactions</p>
        </div>
      </div>

      {/* Chart Section */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
        <AccountChart transactions={transactions} />
      </Suspense>

      
    </div>
  );
}