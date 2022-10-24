type PersonnelUnitsLossesProps = {
    personnelUnitsLosses: number;
    increasePersonnelUnits: number;
}

export const PersonnelUnitsLosses = ({ personnelUnitsLosses, increasePersonnelUnits }: PersonnelUnitsLossesProps) => {
    return (
        <div className="personal-units-losses mt-10">
            <span className="personal-units-losses-total text-6xl md:text-[5rem]">{`~${personnelUnitsLosses}`}</span>
            <span className="personal-units-losses-progress">{`+${increasePersonnelUnits}`}</span>
        </div>
    )
}
