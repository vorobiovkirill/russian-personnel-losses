import type { NextPage } from "next";
import Head from "next/head";
import { Loader } from '../components/Loader';
import { MainMilitaryUnitLosses } from '../components/MainMilitaryUnitLosses';
import { MilitaryUnitLosses } from '../components/MilitaryUnitLosses';
import { PersonnelUnitsLosses } from '../components/PersonnelUnitsLosses';
import { gethDate } from '../utils/helpers';
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const query = trpc.statistic.russianWarship.useQuery();

  if (!query.data) {
    return <Loader />
  }

  const { date, day, increase, stats } = query.data?.data;

  const today = gethDate(date)

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">

        <h1 className="text-5xl font-extrabold leading-normal text-[#e1d798] md:text-[5rem]">
          Personnel losses
        </h1>
        <p className="text-2xl text-[#e1d798]">{`Enemy personnel losses on ${today}, ${day}rd day of full-scale invasion`}</p>

        <PersonnelUnitsLosses increasePersonnelUnits={increase.personnel_units} personnelUnitsLosses={stats.personnel_units} />

        <div className="mt-3 grid gap-2 pt-2 text-center md:grid-cols-4 lg:w-2/3">
          <MainMilitaryUnitLosses title="Tanks" total={stats.tanks} increase={increase.tanks} />
          <MainMilitaryUnitLosses title="BBM" total={stats.armoured_fighting_vehicles} increase={increase.armoured_fighting_vehicles} />
          <MainMilitaryUnitLosses title="Airplanes" total={stats.planes} increase={increase.planes} />
          <MainMilitaryUnitLosses title="Helicopters" total={stats.helicopters} increase={increase.helicopters} />
        </div>

        <div className="mt-3 grid gap-y-4 gap-x-16 pt-2 text-center md:grid-cols-2 lg:w-6/12">
          <MilitaryUnitLosses title="Artillery Systems" total={stats.artillery_systems} increase={increase.artillery_systems} />
          <MilitaryUnitLosses title="MRLS" total={stats.mlrs} increase={increase.mlrs} />
          <MilitaryUnitLosses title="AA Warfare Systems" total={stats.aa_warfare_systems} increase={increase.aa_warfare_systems} />
          <MilitaryUnitLosses title="UAV" total={stats.uav_systems} increase={increase.uav_systems} />
          <MilitaryUnitLosses title="Cruise Missiles" total={stats.cruise_missiles} increase={increase.cruise_missiles} />
          <MilitaryUnitLosses title="Warships Cutters" total={stats.warships_cutters} increase={increase.warships_cutters} />
          <MilitaryUnitLosses title="Vehicles Fuel Tanks" total={stats.vehicles_fuel_tanks} increase={increase.vehicles_fuel_tanks} />
          <MilitaryUnitLosses title="Special Military Equip" total={stats.special_military_equip} increase={increase.special_military_equip} />
        </div>

      </main>
    </>
  );
};

export default Home;
