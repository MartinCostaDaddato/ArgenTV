import { Canales } from "@/app/canales.js";
import CanalCard from "@/Components/CanalCard";
import CanalesComponent from "@/Components/Canales";

function Page({ params }) {
  console.log(params.id);
  const canal = Canales.find((canal) => canal.id === parseInt(params.id));

  return (
    <div
      className="flex min-h-screen
     flex-col justify-center items-center bg-black "
    >
      <CanalCard canal={canal} />
      <CanalesComponent />
    </div>
  );
}

export default Page;
