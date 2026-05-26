import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Panel de Control de VantageAI</h1>
      <p>Bienvenido a tu área de trabajo.</p>
      <div style={{ marginTop: "20px" }}>
        <UserButton />
      </div>
    </div>
  );
}