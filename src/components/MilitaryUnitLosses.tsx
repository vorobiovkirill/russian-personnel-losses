type MilitaryUnitLosses = {
    increase: number;
    title: string;
    total: number;
}

export const MilitaryUnitLosses = ({ increase, title, total }: MilitaryUnitLosses) => {
  return (
    <div className="military-units-losses flex flex-row justify-between">
        <div>
            <span className="military-units-losses-total order-1">{total}</span>
            {increase !== 0 && <span className="military-units-losses-progress order-2 text-xs">{`+${increase}`}</span>}
        </div>
        <span className="order-3">{title}</span>
    </div>
  )
}