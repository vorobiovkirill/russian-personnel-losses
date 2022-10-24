type MainMilitaryUnitLosses = {
  increase: number;
  title: string;
  total: number;
}

export const MainMilitaryUnitLosses = ({ increase, title, total }: MainMilitaryUnitLosses) => {
  return (
    <div className="flex flex-col justify-center gap-y-2">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/3111/3111430.png" alt="tank" /> */}
      <span>{title}</span>
      <div>
        <span className="military-units-losses-total">{total}</span>
        {increase !== 0 && <span className="military-units-losses-progress text-xs">{`+${increase}`}</span>}
      </div>
    </div>
  )
}